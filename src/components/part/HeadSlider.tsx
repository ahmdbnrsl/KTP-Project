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
        <div className="w-full max-h-40 flex justify-center items-center sm:px-8">
            <Swiper
                pagination={{
                    enabled: true,
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: customPagination,
                }}
                modules={[Navigation, Pagination]}
                className="max-h-40 overflow-y-hidden relative [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background w-full max-w-5xl sm:rounded-xl overflow-hidden"
            >
                {[
                    'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D',

                    'https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D',

                    'https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D',

                    'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D',

                    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D',
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
