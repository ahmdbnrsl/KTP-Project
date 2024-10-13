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
                className="fixed top-0 w-full"
            >
                <nav
                    className="w-full px-4 sm:px-6 flex justify-between items-center"
                    style={{
                        backgroundImage:
                            'radial-gradient(60px circle at 80px 40px, rgba(255, 244, 244, 0.3), transparent 80%)',
                    }}
                >
                    <Image
                        src="/logo/main.png"
                        width={300}
                        height={300}
                        alt="logo"
                        loading="lazy"
                        className="w-36"
                    />
                </nav>
            </motion.div>
            <section className="w-full min-h-screen">
                <div
                    className="w-full min-h-screen bg-zinc-100 flex justify-center items-center px-6 py-8 flex-col"
                    style={{
                        backgroundImage:
                            'radial-gradient(600px circle at 50% 50%, rgba(0, 149, 178, 0.1), transparent 80%), radial-gradient(200px circle at 20% 70%, rgba(0, 149, 178, 0.1), transparent 80%), radial-gradient(600px circle at 70% 20%, rgba(0, 149, 178, 0.1), transparent 80%)',
                    }}
                >
                    <h1 className="text-center tracking-tight text-3xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-br from-[#0095b2] to-zinc-800 text-transparent inline-block bg-clip-text">
                        Sistem Manajemen Pertanian dan Pesantren
                    </h1>
                    <p className="max-w-[60ch] text-center mt-4 text-base md:text-lg lg:text-xl text-zinc-800 font-medium">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Laudantium aspernatur perspiciatis odio quia
                        temporibus provident cum vero quasi sed quaerat at
                        necessitatibus, assumenda rem nobis tempora doloribus
                        voluptas fugit! Voluptate.
                    </p>
                    <Link href="/login">
                        <Button
                            type="button"
                            className="font-semibold mt-4 rounded-full text-xl md:text-2xl lg:text-3xl bg-transparent text-zinc-800 border-4 border-[#0095b2] py-2 md:py-4 lg:py-6 px-6 md:px-8 lg:px-10 hover:bg-[#0095b2] hover:text-zinc-100 transition-colors"
                        >
                            Login
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
