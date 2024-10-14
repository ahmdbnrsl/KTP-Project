'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function HomePage() {
    const data = [
        {
            title: 'Ngaji',
        },
        {
            title: 'Berkebun',
        },
        {
            title: 'Sosialisasi',
        },
        {
            title: 'Berjamaah',
        },
        {
            title: 'Hadroh',
        },
    ];
    return (
        <main className="w-full min-h-screen bg-zinc-100 bg-ornament flex flex-col items-center justify-center">
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
            <section className="w-full min-h-screen lg:px-12">
                <div
                    className="w-full min-h-screen flex justify-center items-center px-6 py-8 flex-col"
                    style={{
                        backgroundImage:
                            'radial-gradient(600px circle at 50% 50%, rgba(0, 149, 178, 0.1), transparent 80%), radial-gradient(200px circle at 20% 70%, rgba(0, 149, 178, 0.1), transparent 80%), radial-gradient(600px circle at 70% 20%, rgba(0, 149, 178, 0.1), transparent 80%)',
                    }}
                >
                    <motion.h1
                        initial={{
                            y: -30,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        className="text-center tracking-tight text-3xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-br from-[#0095b2] to-zinc-800 text-transparent inline-block bg-clip-text"
                    >
                        Sistem Manajemen Pertanian dan Pesantren
                    </motion.h1>
                    <motion.p
                        initial={{
                            y: -30,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.3,
                        }}
                        className="max-w-[60ch] text-center mt-4 text-base md:text-lg lg:text-xl text-zinc-800 font-medium"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Laudantium aspernatur perspiciatis odio quia
                        temporibus provident cum vero quasi sed quaerat at
                        necessitatibus, assumenda rem nobis tempora doloribus
                        voluptas fugit! Voluptate.
                    </motion.p>
                    <motion.div
                        initial={{
                            y: -30,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.6,
                        }}
                        className="mt-4"
                    >
                        <Link href="/login">
                            <Button
                                type="button"
                                className="font-semibold rounded-full text-xl md:text-2xl lg:text-3xl bg-transparent text-zinc-800 border-4 border-[#0095b2] py-2 md:py-4 lg:py-6 px-6 md:px-8 lg:px-10 hover:bg-[#0095b2] hover:text-zinc-100 transition-colors"
                            >
                                Login
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
            <section className="w-full lg:px-12 py-5 flex justify-center">
                <div className="max-w-[1024px] w-full pt-1 lg:rounded-2xl lg:p-1 overflow-hidden min-h-screen">
                    <div className="w-full p-5 lg:rounded-[0.75rem] min-h-screen grid grid-cols-auto-fit gap-5">
                        {data.map((items, i) => (
                            <div
                                key={i}
                                className="w-full h-[20rem] rounded-lg bg-zinc-100 bg-gradient-to-b fr border-1 border-zinc-800/[0.3] to-transparent from-[#0095b2]/[0.1]"
                            >
                                <h1 className="font-semibold bg-gradient-to-br from-[#0095b2] to-zinc-800 text-transparent inline-block bg-clip-text tracking-tight text-lg md:text-xl lg:text-2xl">
                                    {items.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
