import { NextAuthOptions, User as NextAuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { usersModel } from '@/models/users';
import type { User } from '@/types';
import mongoose from 'mongoose';
import CryptoJS from 'crypto-js';

const MONGODB_URI = process.env.MONGODB_URI || '';

declare module 'next-auth' {
    interface Session {
        user: {
            full_name?: string | null;
            nomor_induk?: string | null;
            user_id?: string | null;
            role?: string | null;
        };
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.SECRET_TOKEN,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'credentials',
            credentials: {
                nomor_induk: {
                    label: 'nomor_induk',
                    type: 'text',
                },
                password: {
                    label: 'password',
                    type: 'password',
                },
                role: {
                    label: 'role',
                    type: 'text',
                },
            },
            async authorize(credentials) {
                try {
                    await mongoose.connect(MONGODB_URI);
                    const { nomor_induk, password, role } = credentials as {
                        nomor_induk: string;
                        password: string;
                        role: string;
                    };
                    const user: User | null = await usersModel.findOne({
                        nomor_induk,
                    });

                    if (
                        user &&
                        CryptoJS.AES.decrypt(
                            user.password,
                            process.env.BEARER_TOKEN || ''
                        ).toString(CryptoJS.enc.Utf8) === password
                    ) {
                        return user as NextAuthUser;
                    } else {
                        return null;
                    }
                } finally {
                    await mongoose.connection.close();
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user, trigger, session }: any) {
            if (account?.provider === 'credentials') {
                token.full_name = user.full_name;
                token.nomor_induk = user.nomor_induk;
                token.user_id = user.user_id;
                token.role = user.role;
            }

            return token;
        },

        async session({ session, token }: any) {
            if ('full_name' in token) {
                session.user.full_name = token.full_name;
            }
            if ('nomor_induk' in token) {
                session.user.nomor_induk = token.nomor_induk;
            }
            if ('user_id' in token) {
                session.user.user_id = token.user_id;
            }
            if ('role' in token) {
                session.user.role = token.role;
            }

            return session;
        },
    },
    pages: {
        signIn: '/login',
    },
};