'use client';

import Image from 'next/image';
import { FaUserLock } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import * as React from 'react';

export default function LoginPage() {
    const [passMessage, setPassMessage] = React.useState<string>('');
    const [borderPassRed, setBorderPassRed] = React.useState<boolean>(false);
    const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let pass: string = e.target.value;
        let validate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])$/;
        if (validate.test(pass)) {
            setPassMessage('');
            setBorderPassRed(false);
        }
        if (!validate.test(pass)) {
            setPassMessage(
                'Password tidak valid (password harus memiliki setidaknya 8 karakter berisi huruf kecil, huruf besar, angka, dan simbol'
            );
            setBorderPassRed(true);
        }
    };
    return (
        <main className="w-full min-h-screen flex flex-col justify-center items-center p-6 bg-zinc-100 bg-wp bg-no-repeat bg-cover bg-center">
            <div className="w-full max-w-md py-6 px-5 rounded-xl bg-zinc-100 border-2 border-zinc-300 shadow-2xl shadow-zinc-500 lg:flex lg:flex-row-reverse lg:max-w-5xl lg:p-0">
                <div className="flex justify-center w-full lg:w-2/3 lg:border-l-2 lg:border-zinc-300">
                    <Image
                        src="/logo/auth.png"
                        alt="logo"
                        width={960}
                        height={540}
                        className="w-2/3 object-cover"
                        loading="lazy"
                    />
                </div>
                <hr className="lg:hidden"></hr>
                <form className="mt-3 mb-5 lg:w-1/3 flex flex-col p-5">
                    <p className="px-3 text-sm font-semibold text-zinc-800">
                        NIM/NIS
                    </p>
                    <div className="flex flex-col mt-3 relative">
                        <Input
                            type="number"
                            name="nim"
                            id="nim"
                            className="peer placeholder:text-transparent px-4 py-3 text-zinc-800"
                            placeholder="nim"
                        ></Input>
                        <label
                            htmlFor="nim"
                            className="text-xs text-zinc-600 bg-zinc-100 ml-3 px-2 absolute -translate-y-3 peer-placeholder-shown:translate-y-3 font-normal peer-focus:-translate-y-3 w-auto py-1 peer-focus:text-zinc-800 -mt-1"
                        >
                            Masukan NIM/NIS
                        </label>
                    </div>
                    <p className="px-3 text-sm text-zinc-800 font-semibold mt-3">
                        Password
                    </p>
                    <div className="flex flex-col mt-3 relative">
                        <Input
                            onChange={HandlePasswordChange}
                            type="password"
                            name="password"
                            id="password"
                            className={`peer placeholder:text-transparent px-4 py-3 text-zinc-800 ${
                                borderPassRed && 'border-red-500 ring-red-500'
                            }`}
                            placeholder="password"
                        ></Input>
                        <label
                            htmlFor="password"
                            className={`text-xs text-zinc-600 bg-zinc-100 ml-3 px-2 absolute -translate-y-3 peer-placeholder-shown:translate-y-3 font-normal peer-focus:-translate-y-3 w-auto py-1 peer-focus:text-zinc-800 -mt-1 ${
                                borderPassRed &&
                                'text-red-500 peer-focus:text-red-500'
                            } `}
                        >
                            Masukan password
                        </label>
                    </div>
                    {passMessage && (
                        <p className="text-red-500 font-medium text-xs mt-3 px-3">
                            {passMessage}
                        </p>
                    )}
                    <p className="px-3 text-sm text-zinc-800 font-semibold mt-3">
                        Status
                    </p>
                    <div className="flex flex-col mt-3 relative">
                        <Select>
                            <SelectTrigger className="w-full text-xs">
                                <SelectValue
                                    className="text-xs"
                                    placeholder="Pilih status Anda"
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value="Mahasiswa KTP">
                                        Mahasiswa KTP
                                    </SelectItem>
                                    <SelectItem value="Siswa STP">
                                        Siswa STP
                                    </SelectItem>
                                    <SelectItem value="Admin / Pengurus">
                                        Admin / Pengurus
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        type="submit"
                        className="mt-6 w-full flex justify-center items-center gap-2"
                    >
                        <FaUserLock className="-mt-1" /> Masuk
                    </Button>
                    <p className="text-sm text-zinc-800 mt-5 w-full text-center">
                        Belum punya akun?{' '}
                        <Link href="/" className="font-semibold cursor-pointer">
                            Hubungi admin
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
