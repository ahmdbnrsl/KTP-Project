'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <main className="w-full min-h-screen bg-zinc-100 flex flex-col">
            <header className="flex justify-center items-center w-full h-screen">
                <Carousel
                    className="w-full h-screen relative"
                    plugins={[
                        Autoplay({
                            delay: 8000,
                        }),
                    ]}
                >
                    <div className="z-[99999] flex flex-col gap-4 justify-center items-center w-full h-full absolute bg-zinc-950/[.8]">
                        <motion.div
                            initial={{
                                y: -20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 100,
                            }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.75,
                            }}
                        >
                            <h1 className="text-xl md:text-3xl lg:text-5xl text-zinc-200 font-bold">
                                Kuliah Tani Pondok
                            </h1>
                        </motion.div>

                        <p className="-mt-3 text-sm md:text-base lg:text-lg text-zinc-200 font-medium">
                            Kuliah Tani Pondok
                        </p>
                    </div>
                    <CarouselContent>
                        <CarouselItem className="flex justify-center items-center w-full h-screen">
                            <Image
                                className="object-cover w-full h-screen"
                                width="1200"
                                height="1200"
                                src="https://kel2.kebunbelimbingkita.my.id/halaman_utama/assets/img/Herobaru.png"
                                alt="hero"
                                loading="lazy"
                            />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center w-full h-screen">
                            <Image
                                className="object-cover w-full h-screen"
                                width="1200"
                                height="1200"
                                src="https://kel2.kebunbelimbingkita.my.id/halaman_utama/assets/img/Herobaru.png"
                                alt="hero"
                                loading="lazy"
                            />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center items-center w-full h-screen">
                            <Image
                                className="object-cover w-full h-screen"
                                width="1200"
                                height="1200"
                                src="https://kel2.kebunbelimbingkita.my.id/halaman_utama/assets/img/Herobaru.png"
                                alt="hero"
                                loading="lazy"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-5 md:left-8 scale-90 sm:scale-0 md:scale-[1.4] lg:scale-[1.8] z-[99999]" />
                    <CarouselNext className="absolute right-5 md:right-8 scale-90 sm:scale-0 md:scale-[1.4] lg:scale-[1.8] z-[99999]" />
                </Carousel>
            </header>
            <section className="w-full min-h-screen"></section>
        </main>
    );
}
