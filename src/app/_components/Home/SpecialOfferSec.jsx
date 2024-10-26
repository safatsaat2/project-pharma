"use client";
import React from "react";
import HeadingArea from "../Heading/HeadingArea";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import ProductCardSm from "../ProductCard/ProductCardSm";
import { useProducts } from "@/app/Providers/ProductsProvider"; // Ensure this path is correct

const SpecialOfferSec = () => {
  const { productsData } = useProducts();

  // Function to calculate discount percentage
  const calculateDiscountPercentage = (regularPrice, discountPrice) => {
    return ((regularPrice - discountPrice) / regularPrice) * 100;
  };
  const filteredProducts = productsData.filter(
    (product) => calculateDiscountPercentage(product.regularPrice, product.discountPrice) >= 10
  );

  return (
    <div className="px-10 srsTrendingSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea heading="Special Offers For You 10% Off On All Products" link="/" />
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCardSm
                imgLink={product.imageLink || "/images/slider_medcine.png"}
                ratingScore={product.rating || "5.0"}
                title={product.name || "Sunscreen Stick 250ml"}
                link={`/products/${product.id}`}
                disPrice={`${product.discountPrice.toFixed(2)}`} 
                normalPrice={`${product.regularPrice.toFixed(2)}`} 
                btnExClasses={'!w-16'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialOfferSec;
