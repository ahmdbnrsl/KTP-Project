'use client';

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

export default function LoginPage() {
    return (
        <main className="p-6 w-full min-h-screen bg-zinc-100 flex flex-col justify-center items-center">
            <div className="w-full max-w-md py-6 px-5 rounded-xl bg-zinc-100 border-2 border-zinc-300 shadow-2xl shadow-zinc-500">
                <h1 className="text-xl md:text-2xl font-semibold text-green-600 flex gap-2 items-center">
                    <FaUserLock className="-mt-1" /> Masuk
                </h1>
                <p className="text-xs text-zinc-500 font-normal mt-2.5">
                    Masukan NIM/NIS dan password Anda,{' '}
                    <Link
                        href="https://wa.me/"
                        className="text-green-600 cursor-pointer"
                    >
                        Hubungi Admin
                    </Link>{' '}
                    untuk mendapatkan password.
                </p>
                <hr className="mt-3"></hr>
                <form className="mt-3">
                    <p className="px-3 text-sm text-zinc-500 font-semibold">
                        NIM/NIS
                    </p>
                    <div className="flex flex-col mt-3 relative">
                        <Input
                            type="number"
                            name="nim"
                            id="nim"
                            className="peer placeholder:text-transparent px-4 py-3 text-zinc-600"
                            placeholder="nim"
                        ></Input>
                        <label
                            htmlFor="nim"
                            className="text-xs text-zinc-400 bg-zinc-100 ml-3 px-2 absolute -translate-y-3 peer-placeholder-shown:translate-y-3 font-normal peer-focus:-translate-y-3 w-auto py-1 peer-focus:text-green-600 -mt-1"
                        >
                            Masukan NIM/NIS Anda disini.
                        </label>
                    </div>
                    <p className="px-3 text-sm text-zinc-500 font-semibold mt-3">
                        Password
                    </p>
                    <div className="flex flex-col mt-3 relative">
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            className="peer placeholder:text-transparent px-4 py-3 text-zinc-600"
                            placeholder="password"
                        ></Input>
                        <label
                            htmlFor="password"
                            className="text-xs text-zinc-400 bg-zinc-100 ml-3 px-2 absolute -translate-y-3 peer-placeholder-shown:translate-y-3 font-normal peer-focus:-translate-y-3 w-auto py-1 peer-focus:text-green-600 -mt-1"
                        >
                            Masukan NIM/NIS Anda disini.
                        </label>
                    </div>
                    <p className="px-3 text-sm text-zinc-500 font-semibold mt-3">
                        Peran
                    </p>
                    <div className="flex flex-col mt-3 relative">
                        <Select>
                            <SelectTrigger className="w-full text-xs">
                                <SelectValue
                                    className="text-xs text-zinc-400"
                                    placeholder="Pilih peran Anda"
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Peran</SelectLabel>
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
                    <Button type="submit" className="mt-4 w-full">
                        Masuk
                    </Button>
                </form>
            </div>
        </main>
    );
}
