'use client';

import Image from 'next/image';
import { z } from 'zod';
import { FaUserLock } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage({ searchParams }: any) {
    const [passMessage, setPassMessage] = React.useState<string>('');
    const [nimMessage, setNimMessage] = React.useState<string>('');
    const [roleMessage, setRoleMessage] = React.useState<string>('');
    const [load, setLoad] = React.useState<boolean>(false);
    const [errMessage, setErrMessage] = React.useState<{
        status: boolean;
        message: string;
    }>({
        status: false,
        message: ''
    });
    const { push } = useRouter();

    const callbackUrl = searchParams.callbackUrl || '/dashboard';

    const passSchema = z
        .string()
        .min(8, 'Password tidak boleh kurang dari 8 karakter')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
            'Password tidak valid (password harus memiliki setidaknya 8 karakter berisi huruf kecil, huruf besar, angka, dan simbol)'
        );
    const nomorIndukSchema = z.number().min(1, 'NIM/NIS tidak boleh kosong');
    const roleSchema = z.string().min(1, 'Status tidak boleh kosong');
    const loginSchema = z.object({
        nomor_induk: nomorIndukSchema,
        password: passSchema,
        role: roleSchema
    });

    const HandleNimChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let nimnis: number = Number(e.target.value);
        try {
            nomorIndukSchema.parse(nimnis);
            setNimMessage('');
        } catch (err) {
            if (err instanceof z.ZodError) {
                setNimMessage(JSON.parse(err.message)[0].message);
            }
        }
    };
    const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let pass: string = e.target.value;
        try {
            passSchema.parse(pass);
            setPassMessage('');
        } catch (err) {
            if (err instanceof z.ZodError) {
                setPassMessage(JSON.parse(err.message)[0].message);
            }
        }
    };
    const HandleRoleChange = (e: string) => {
        try {
            roleSchema.parse(e);
            setRoleMessage('');
        } catch (err) {
            if (err instanceof z.ZodError) {
                setRoleMessage(JSON.parse(err.message)[0].message);
            }
        }
    };

    const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        interface Login extends EventTarget {
            nomor_induk: HTMLInputElement;
            password: HTMLInputElement;
            role: HTMLInputElement;
        }
        const el = e.target as Login;

        try {
            let validate = loginSchema.parse({
                nomor_induk: Number(el.nomor_induk.value),
                password: el.password.value,
                role: el.role.value
            });

            setLoad(true);
            const login = await signIn('credentials', {
                ...validate,
                callbackUrl
            });

            if (login?.error) {
                setLoad(false);
                if (login.status === 401) {
                    throw new Error('NIM/NIS atau Password salah.');
                } else {
                    throw new Error('Maaf terjadi kesalahan.');
                }
            } else {
                setErrMessage({
                    status: false,
                    message: 'Login berhasil.'
                });
                setLoad(false);
                push(callbackUrl);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const isErr = JSON.parse(error.message)[0];
                if (isErr.path[0] === 'nomor_induk') {
                    el.nomor_induk.focus();
                    setNimMessage(isErr.message);
                } else if (isErr.path[0] === 'password') {
                    el.password.focus();
                    setPassMessage(isErr.message);
                } else {
                    setRoleMessage(isErr.message);
                }
            } else {
                setErrMessage({
                    status: true,
                    message: (error as Error).message
                });
            }
        }
    };
    return (
        <main className='w-full min-h-screen flex flex-col justify-center items-center p-6 bg-zinc-100 bg-wp bg-no-repeat bg-cover bg-center'>
            <motion.div
                drag
                dragConstraints={{
                    top: -50,
                    left: -50,
                    right: 50,
                    bottom: 50
                }}
                initial={{
                    opacity: 0,
                    scale: 0.8
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='w-full max-w-md py-6 px-5 rounded-xl bg-zinc-100 border-2 border-zinc-300 shadow-2xl shadow-zinc-500 lg:flex lg:flex-row-reverse lg:max-w-5xl lg:p-0'
            >
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.3
                    }}
                    className='flex justify-center w-full lg:w-2/3 lg:border-l-2 lg:border-zinc-300'
                >
                    <Image
                        src='/logo/auth.png'
                        alt='logo'
                        width={960}
                        height={540}
                        className='w-2/3 object-cover'
                        loading='lazy'
                    />
                </motion.div>
                <hr className='lg:hidden'></hr>

                <form
                    onSubmit={HandleLogin}
                    className='mt-3 mb-5 lg:w-1/3 flex flex-col p-5'
                >
                    {errMessage.message && (
                        <p
                            className={`${
                                errMessage.status
                                    ? 'text-red-500'
                                    : 'text-[#0095b2]'
                            } text-sm font-medium mb-4`}
                        >
                            {errMessage.message}
                        </p>
                    )}
                    <motion.p
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.3
                        }}
                        className='px-3 text-sm font-semibold text-zinc-800'
                    >
                        NIM/NIS
                    </motion.p>
                    <motion.div
                        initial={{
                            y: -30,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.3
                        }}
                        className='flex flex-col mt-3 relative'
                    >
                        <Input
                            onChange={HandleNimChange}
                            type='number'
                            name='nomor_induk'
                            id='nomor_induk'
                            className='peer placeholder:text-transparent px-4 py-3 text-zinc-800'
                            placeholder='nomor_induk'
                        ></Input>
                        <label
                            htmlFor='nomor_induk'
                            className='text-xs text-zinc-600 bg-zinc-100 ml-3 px-2 absolute -translate-y-3 peer-placeholder-shown:translate-y-3 font-normal peer-focus:-translate-y-3 w-auto py-1 peer-focus:text-zinc-800 -mt-1'
                        >
                            Masukan NIM/NIS
                        </label>
                    </motion.div>
                    {nimMessage && (
                        <p className='text-red-500 font-medium text-xs mt-3 px-3'>
                            {nimMessage}
                        </p>
                    )}
                    <motion.p
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.3,
                            duration: 0.3
                        }}
                        className='px-3 text-sm text-zinc-800 font-semibold mt-3'
                    >
                        Password
                    </motion.p>
                    <motion.div
                        initial={{
                            y: -30,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.3,
                            duration: 0.3
                        }}
                        className='flex flex-col mt-3 relative'
                    >
                        <Input
                            onChange={HandlePasswordChange}
                            type='password'
                            name='password'
                            id='password'
                            className={`peer placeholder:text-transparent px-4 py-3 text-zinc-800 `}
                            placeholder='password'
                        ></Input>
                        <label
                            htmlFor='password'
                            className={`text-xs text-zinc-600 bg-zinc-100 ml-3 px-2 absolute -translate-y-3 peer-placeholder-shown:translate-y-3 font-normal peer-focus:-translate-y-3 w-auto py-1 peer-focus:text-zinc-800 -mt-1`}
                        >
                            Masukan password
                        </label>
                    </motion.div>
                    {passMessage && (
                        <p className='text-red-500 font-medium text-xs mt-3 px-3'>
                            {passMessage}
                        </p>
                    )}
                    <motion.p
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.6,
                            duration: 0.3
                        }}
                        className='px-3 text-sm text-zinc-800 font-semibold mt-3'
                    >
                        Status
                    </motion.p>
                    <motion.div
                        initial={{
                            y: -30,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.6,
                            duration: 0.3
                        }}
                        className='flex flex-col mt-3 relative'
                    >
                        <Select
                            name='role'
                            onValueChange={HandleRoleChange}
                        >
                            <SelectTrigger className='w-full text-xs'>
                                <SelectValue
                                    className='text-xs'
                                    placeholder='Pilih status Anda'
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Status</SelectLabel>
                                    <SelectItem value='mahasiswa'>
                                        Mahasiswa KTP
                                    </SelectItem>
                                    <SelectItem value='siswa'>
                                        Siswa STP
                                    </SelectItem>
                                    <SelectItem value='admin'>
                                        Admin / Pengurus
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </motion.div>
                    {roleMessage && (
                        <p className='text-red-500 font-medium text-xs mt-3 px-3'>
                            {roleMessage}
                        </p>
                    )}
                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.9,
                            duration: 0.3
                        }}
                        whileHover={{
                            scale: 0.8
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                        className='mt-6 w-full'
                    >
                        <Button
                            type='submit'
                            className='w-full flex justify-center items-center gap-2 bg-[#0095b2] hover:bg-[#0095b2]/[0.8]'
                        >
                            {!load ? (
                                <>
                                    <FaUserLock /> Masuk
                                </>
                            ) : (
                                'Masuk...'
                            )}
                        </Button>
                    </motion.div>
                    <motion.p
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            delay: 2.2,
                            duration: 0.3
                        }}
                        className='text-sm text-zinc-800 mt-5 w-full text-center'
                    >
                        Belum punya akun?{' '}
                        <Link
                            href='/'
                            className='font-semibold cursor-pointer'
                        >
                            Hubungi admin
                        </Link>
                    </motion.p>
                </form>
            </motion.div>
        </main>
    );
}
