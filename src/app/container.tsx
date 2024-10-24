'use client';

import Navbar from '@/components/part/Navbar';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Container({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <main className="w-full min-h-screen bg-zinc-50 flex flex-col">
            {!pathName.startsWith('/login') && <Navbar />}
            {children}
        </main>
    );
}
