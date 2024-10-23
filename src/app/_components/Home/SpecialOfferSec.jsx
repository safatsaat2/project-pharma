"use client"
import React from "react";
import HeadingArea from "../Heading/HeadingArea";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import ProductCardSm from "../ProductCard/ProductCardSm";

const SpecialOfferSec = () => {
  return (
    <div className="px-10 srsTrendingSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea heading="Special Offers For You" link="/" />
        <Swiper
        breakpoints={{
            1024:{
                slidesPerView: 4,
            },
            576: {
              // width: 576,
              slidesPerView: 2,
            },
          }}
        spaceBetween={30}
        loop={true} // Enable looping
        autoplay={{
            delay: 3000, // Time in milliseconds between slides (e.g., 3000ms = 3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
        modules={[ Autoplay]} // Include required modules
        className="mySwiper"
      >
        <SwiperSlide><ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"}/></SwiperSlide>
        <SwiperSlide><ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"}/></SwiperSlide>
        <SwiperSlide><ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"}/></SwiperSlide>
        <SwiperSlide><ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"}/></SwiperSlide>
        <SwiperSlide><ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"}/></SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default SpecialOfferSec;
