import mongoose, { Schema, Document, Model } from 'mongoose';
import type { User } from '@/types';

export const UserSchema: Schema<User> = new Schema({
    full_name: { type: String, required: true },
    password: { type: String, required: true },
    nomor_induk: { type: Number, required: true },
    role: { type: String, required: true },
    user_id: { type: String, required: true },
});
