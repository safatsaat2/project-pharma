"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import Items1 from "./SliderItems/Items1";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="px-10 bg-bgPrimary srsHeroSection">
      <Swiper
        slidesPerView={1}
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
        <SwiperSlide><Items1 /></SwiperSlide>
        <SwiperSlide><Items1 /></SwiperSlide>
        <SwiperSlide><Items1 /></SwiperSlide>
        <SwiperSlide><Items1 /></SwiperSlide>
      </Swiper> 
    </section>
  );
};

export default HeroSection;
