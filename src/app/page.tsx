'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <main className="w-full min-h-screen bg-zinc-100">
            <motion.div
                initial={{
                    y: -50,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
            >
                <nav className="w-full px-4 sm:px-6 flex justify-between items-center bg-zinc-100">
                    <Image
                        src="/logo/main.png"
                        width={300}
                        height={300}
                        alt="logo"
                        loading="lazy"
                        className="w-40"
                    />
                    <Link href="/login">
                        <Button type="button">Login</Button>
                    </Link>
                </nav>
            </motion.div>
            <section className="w-full min-h-screen relative">
                <Image
                    src="/image/cipetir.jpeg"
                    width={1200}
                    height={1200}
                    alt="logo"
                    loading="lazy"
                    className="w-full h-screen object-cover"
                />
                <div className="absolute w-full h-full"></div>
            </section>
        </main>
    );
}
