import { Document } from 'mongoose';

export interface User extends Document {
    full_name: string;
    nomor_induk: number;
    password: string;
    role: 'admin' | 'mahasiswa' | 'siswa';
    user_id: string;
}
