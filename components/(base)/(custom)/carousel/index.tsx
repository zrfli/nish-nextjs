"use client";

import Image from "next/image";
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const BaseCarousel = () => {
  
  return (
      <Swiper navigation={true} modules={[Navigation]}>
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide className="relative min-h-96 h-full w-full" key={index}>
            <Image src="/0190f88b-c3f4-7275-b503-99359feea678.webp" fill alt="" priority={true} style={{ objectFit: "cover" }} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
}

export default BaseCarousel;
