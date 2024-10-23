'use client';

import Link from 'next/link';
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { CiFacebook, CiInstagram, CiImageOn } from 'react-icons/ci';
import HiddenToVisible from '@/components/framer/hiddenToVisible';
import { usePathname } from 'next/navigation';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import type { Navigation } from '@/types';

export default function Navbar() {
    const navigationLink: Navigation[] = [
        {
            title: 'Beranda',
            href: '/',
            icon: ({ isClass }: { isClass: string }) => (
                <IoHomeOutline className={isClass} />
            ),
        },
        {
            title: 'Masuk',
            href: '/login',
            icon: ({ isClass }: { isClass: string }) => (
                <FaRegUser className={isClass} />
            ),
        },
        {
            title: 'Galeri',
            href: '/galeri',
            icon: ({ isClass }: { isClass: string }) => (
                <CiImageOn className={isClass} />
            ),
        },
        {
            title: 'Dashboard',
            href: '/dashboard',
            icon: ({ isClass }: { isClass: string }) => (
                <MdOutlineSpaceDashboard className={isClass} />
            ),
        },
    ];
    const pathName = usePathname();
    return (
        <HiddenToVisible IsClassName="w-full sticky top-0 z-[9999] flex px-6 sm:px-8 justify-center pt-2 backdrop-blur pb-3 gap-1.5 flex-col items-center bg-zinc-50/[0.80]">
            <nav className="w-full flex justify-center items-center pt-3">
                <div
                    className="flex justify-between w-full max-w-5xl"
                    style={{
                        backgroundImage:
                            'radial-gradient(60px circle at 80px 40px, rgba(255, 244, 244, 0.3), transparent 80%)',
                    }}
                >
                    <div className="flex items-center gap-0.5">
                        <h1 className="text-zinc-500 font-bold text-lg md:text-xl">
                            SMPP
                        </h1>
                    </div>
                    <ul className="flex gap-2 items-center text-base md:text-lg text-zinc-600">
                        <li>
                            <Link
                                href="/"
                                className="flex items-center gap-1 cursor-pointer"
                            >
                                <FaRegEnvelope className="text-[#0095b2]" />
                                <p className="text-xs md:text-sm font-medium">
                                    cikarag@gmail.com
                                </p>
                            </Link>
                        </li>
                        <li className="px-2 font-bold text-zinc-400">|</li>
                        <li>
                            <Link
                                href="/"
                                className="text-[#0095b2] cursor-pointer"
                            >
                                <CiFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[#0095b2] cursor-pointer"
                            >
                                <CiInstagram />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="w-full max-w-5xl flex justify-center md:justify-end gap-2 md:gap-4 lg:gap-6 flex-wrap mt-2 pb-2">
                {navigationLink.map((navigation: Navigation, i: number) => {
                    return (
                        <Link
                            key={i}
                            href={navigation.href}
                            className={`group text-sm font-semibold px-5 py-1 rounded-lg hover:bg-[#0095b2] hover:text-zinc-50 border border-zinc-300/[0.80] shadow-md shadow-zinc-200 flex gap-2 items-center cursor-pointer ${
                                pathName.startsWith(navigation.href)
                                    ? 'bg-[#0095b2] text-zinc-50'
                                    : 'text-zinc-500 bg-zinc-50'
                            }`}
                        >
                            <navigation.icon
                                isClass={`${
                                    pathName.startsWith(navigation.href)
                                        ? 'text-zinc-50'
                                        : 'text-[#0095b2] group-hover:text-zinc-50'
                                }`}
                            />{' '}
                            {navigation.title}
                        </Link>
                    );
                })}
            </nav>
        </HiddenToVisible>
    );
}
