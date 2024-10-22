import { Document } from 'mongoose';
import * as R from 'react';

export interface User extends Document {
    full_name: string;
    nomor_induk: number;
    password: string;
    role: 'admin' | 'mahasiswa' | 'siswa';
    user_id: string;
}

//COMPONENTS TYPES
export type Navigation = {
    title: string;
    href: string;
    icon: ({ isClass }: { isClass: string }) => R.JSX.Element;
};
