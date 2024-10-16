import { UserSchema } from '@/schema/users';
import type { User } from '@/types';
import mongoose from 'mongoose';
import CryptoJS from 'crypto-js';

const MONGODB_URI = process.env.MONGODB_URI || '';
const usersModel = mongoose.models.users || mongoose.model('users', UserSchema);

export const compare = async (
    nomor_induk: number,
    pass: string,
    role: 'admin' | 'siswa' | 'mahasiswa'
): Promise<User | false> => {
    try {
        await mongoose.connect(MONGODB_URI);
        const user: User | null = await usersModel.findOne({ nomor_induk });
        console.log(user);
        if (user) {
            if (
                CryptoJS.AES.decrypt(
                    user.password,
                    process.env.BEARER_TOKEN || ''
                ).toString(CryptoJS.enc.Utf8) === pass &&
                user.role === role
            ) {
                console.log('password is valid');
                return user;
            } else {
                console.error('password is not valid');
                return false;
            }
        } else return false;
    } finally {
        await mongoose.connection.close();
    }
};
