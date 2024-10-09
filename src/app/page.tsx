'use client';

import * as React from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import TitleAnimation from '@/components/framer/titleAnimation';
import SubTitleAnimation from '@/components/framer/subTitleAnimation';
import { Marcellus } from 'next/font/google';

const marcellus = Marcellus({
    subsets: ['latin'],
    weight: ['400'],
});

type DataHeader = { image: string; title: string; subTitle: string };

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const dataHeader: DataHeader[] = [
        {
            image: 'https://kel2.kebunbelimbingkita.my.id/halaman_utama/assets/img/Herobaru.png',
            title: 'Kebun Durian Pesarangan',
            subTitle: 'Pertanian Durian',
        },
        {
            image: 'https://kel2.kebunbelimbingkita.my.id/halaman_utama/assets/img/Herobaru.png',
            title: 'Kebun Durian Cipetir',
            subTitle: 'Beasiswa Kuliah Tani Pondok',
        },
        {
            image: 'https://kel2.kebunbelimbingkita.my.id/halaman_utama/assets/img/Herobaru.png',
            title: 'Kebun Jambu Cikarag',
            subTitle: 'Beasiswa Sekolah Tani Pondok',
        },
    ];
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
                    <CarouselContent>
                        {dataHeader.map((item: DataHeader, index: number) => (
                            <CarouselItem
                                key={index}
                                className="flex justify-center items-center w-full"
                            >
                                <Image
                                    className="object-cover w-full h-full"
                                    width="1200"
                                    height="1200"
                                    src={item.image}
                                    alt="hero"
                                    loading="lazy"
                                />
                                <div className="z-[99999] flex flex-col gap-4 justify-center items-start w-full h-full absolute bg-zinc-950/[.5] p-5 lg:p-10 xl:p-12">
                                    <TitleAnimation>
                                        <h1
                                            className={`text-2xl md:text-4xl lg:text-8xl text-zinc-200 font-medium ${marcellus.className}`}
                                        >
                                            {item.title}
                                        </h1>
                                    </TitleAnimation>
                                    <SubTitleAnimation>
                                        <p
                                            className={`-mt-2 text-base md:text-xl lg:text-2xl xl:text-3xl text-zinc-200 font-medium ${marcellus.className}`}
                                        >
                                            {item.subTitle}
                                        </p>
                                    </SubTitleAnimation>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious className="opacity-70 hover:opacity-100 z-[99999] absolute left-3 sm:left-5 md:left-8 scale-90 sm:scale-0 md:scale-[1.4] lg:scale-[1.8]" />
                    <CarouselNext className="opacity-70 hover:opacity-100 z-[99999] absolute right-3 sm:right-5 md:right-8 scale-90 sm:scale-0 md:scale-[1.4] lg:scale-[1.8]" /> */}
                </Carousel>
            </header>
            <section className="w-full min-h-screen"></section>
        </main>
    );
}
