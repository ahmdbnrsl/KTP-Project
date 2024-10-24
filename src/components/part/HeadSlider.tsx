'use client';

import * as React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Button } from '@/components/ui/button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function CustomNavigation() {
    const swiper = useSwiper();

    return (
        <>
            <Button
                onClick={() => swiper.slidePrev()}
                className="rounded-full bg-zinc-100/[0.1] flex justify-center items-center"
            >
                <IoIosArrowBack className="h-7 w-7 -translate-x-0.5 stroke-2" />
            </Button>

            <Button
                onClick={() => swiper.slideNext()}
                className="rounded-full bg-zinc-100/[0.1] flex justify-center items-center"
            >
                <IoIosArrowForward className="h-7 w-7 translate-x-px stroke-2" />
            </Button>
        </>
    );
}

function customPagination(_: any, className: any) {
    return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}

export default function Slider() {
    return (
        <div className="w-full max-h-48 flex justify-center items-center sm:px-8">
            <Swiper
                pagination={{
                    enabled: true,
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: customPagination,
                }}
                modules={[Navigation, Pagination]}
                className="max-h-48 overflow-y-hidden relative [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background w-full max-w-5xl sm:rounded-xl overflow-hidden"
            >
                {[
                    '/image/cikarag.jpeg',
                    '/image/cipetir.jpeg',
                    '/image/pesarangan.jpg',
                ].map((img, index) => (
                    <SwiperSlide key={index} className="select-none">
                        <img
                            src={img}
                            alt={`image-${index}`}
                            className="h-[28rem] w-full object-cover"
                        />
                    </SwiperSlide>
                ))}
                <CustomNavigation />
            </Swiper>
        </div>
    );
}
