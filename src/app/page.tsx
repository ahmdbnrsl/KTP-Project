'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaHistory } from 'react-icons/fa';
import { LuLampCeiling } from 'react-icons/lu';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import R, { ReactElement } from 'react';
import Slider from '@/components/part/HeadSlider';

export default function HomePage() {
    const data = [
        {
            icon: <LuLampCeiling className="text-[#0095b2] text-6xl mt-12" />,
            title: 'Visi',
        },
        {
            icon: (
                <IoExtensionPuzzleOutline className="text-[#0095b2] text-6xl mt-12" />
            ),
            title: 'Misi',
        },
    ];
    return (
        <>
            <Slider></Slider>
            <section className="mt-10 w-full px-6 sm:px-8 flex justify-center items-center">
                <div className="w-full max-w-5xl flex flex-col sm:items-center">
                    <h1 className="text-center tracking-tighter text-2xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-br from-[#0095b2] to-zinc-800 text-transparent inline-block bg-clip-text">
                        Sistem Manajemen Pertanian dan Pesantren
                    </h1>
                    <p className="text-sm text-zinc-800 mt-6 sm:text-base font-semibold tracking-wide">
                        Lorem ipsum dolor sit
                    </p>
                </div>
            </section>
            <section className="w-full min-h-screen lg:px-12">
                <div className="w-full min-h-screen flex justify-center items-center px-6 py-8 flex-col">
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
            <section className="w-full py-5 p-6 flex justify-center">
                <div className="max-w-[1024px] w-full pt-1 lg:rounded-2xl flex flex-col">
                    <motion.div
                        initial={{
                            y: 40,
                            opacity: 0,
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{ duration: 0.3 }}
                        className="p-4 w-full rounded-lg bg-zinc-100 bg-gradient-to-b fr border-1 border-zinc-800/[0.3] to-transparent from-[#0095b2]/[0.1] hover:-translate-y-3 transition-transform"
                    >
                        <FaHistory className="text-[#0095b2] text-6xl mt-12" />
                        <h1 className="mt-4 font-semibold bg-gradient-to-br from-[#0095b2] to-zinc-800 text-transparent inline-block bg-clip-text tracking-tight text-xl md:text-2xl lg:text-3xl">
                            Sejarah
                        </h1>
                        <p className="mt-3 text-xs md:text-sm lg:text-base text-zinc-800 font-medium">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Magni itaque ullam corrupti facere sunt illo
                            ut error odio possimus, autem quia consectetur
                            mollitia placeat eum ab. Odit est animi ullam. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Facere iusto doloribus velit fuga ad nulla,
                            consequatur voluptates quam, cupiditate odio totam
                            est quos ea optio excepturi officiis praesentium
                            mollitia nisi.
                        </p>
                    </motion.div>
                    <div className="mt-5 w-full lg:rounded-[0.75rem] grid grid-cols-auto-fit gap-5">
                        {data.map((items, i) => (
                            <motion.div
                                initial={{
                                    y: 40,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{ duration: 0.3 }}
                                key={i}
                                className="p-4 w-full rounded-lg bg-zinc-100 bg-gradient-to-b fr border-1 border-zinc-800/[0.3] to-transparent from-[#0095b2]/[0.1] hover:-translate-y-3 transition-transform"
                            >
                                {items.icon}
                                <h1 className="mt-4 font-semibold bg-gradient-to-br from-[#0095b2] to-zinc-800 text-transparent inline-block bg-clip-text tracking-tight text-xl md:text-2xl lg:text-3xl">
                                    {items.title}
                                </h1>
                                <p className="mt-3 text-xs md:text-sm lg:text-base text-zinc-800 font-medium">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Magni itaque ullam
                                    corrupti facere sunt illo ut error odio
                                    possimus, autem quia consectetur mollitia
                                    placeat eum ab. Odit est animi ullam.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
