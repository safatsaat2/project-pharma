import React from 'react';
import HeadingArea from '../Heading/HeadingArea';
import ProductCardSm from '../ProductCard/ProductCardSm';
import "./TopSelling.css";

const TopSelling = () => {
    return (
        <section className="px-10 srsTrendingSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea
          heading={"Top Selling Products"}
          link={"/"}
          linkLabel={"View All"}
          icon={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 ">
            <ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"} prExClasses={"!flex-row gap-5 items-center"} btnLabel={"Add To Cart"} btnExClasses={"flex-row-reverse !px-4 !py-2 w-auto h-auto gap-2 !text-base"} imgExClasses={"max-w-[200px]"}/>
            <ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"} prExClasses={"!flex-row gap-5 items-center"} btnLabel={"Add To Cart"} btnExClasses={"flex-row-reverse !px-4 !py-2 w-auto h-auto gap-2 !text-base"} imgExClasses={"max-w-[200px]"}/>
            <ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"} prExClasses={"!flex-row gap-5 items-center"} btnLabel={"Add To Cart"} btnExClasses={"flex-row-reverse !px-4 !py-2 w-auto h-auto gap-2 !text-base"} imgExClasses={"max-w-[200px]"}/>
            <ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"} prExClasses={"!flex-row gap-5 items-center"} btnLabel={"Add To Cart"} btnExClasses={"flex-row-reverse !px-4 !py-2 w-auto h-auto gap-2 !text-base"} imgExClasses={"max-w-[200px]"}/>
        </div>
      </div>
    </section>
    );
};

export default TopSelling;