"use client";
import React from 'react';
import HeadingArea from '../Heading/HeadingArea';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';


const TestimonialSec = () => {
    return (
        <div className='px-10 srsTrendingSection py-10 lg:py-20'>
            <div className='max-w-screen-xl mx-auto'>
            <HeadingArea heading="Real People Real Opinion" link="/" />

            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true} // Enable looping
        pagination={{
          clickable: true, // Ensure pagination is clickable
        }}
        autoplay={{
            delay: 3000, // Time in milliseconds between slides (e.g., 3000ms = 3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
        modules={[Pagination, Autoplay]} // Include required modules
        className="mySwiper"
      >
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
        <SwiperSlide><TestimonialCard/></SwiperSlide>
      </Swiper> 
            </div>

        </div>
    );
};

export default TestimonialSec;