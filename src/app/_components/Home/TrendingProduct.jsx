import React from "react";
import HeadingArea from "../Heading/HeadingArea";
import ProductCardSm from "../ProductCard/ProductCardSm";


const TrendingProduct = () => {
  return (
    <section className="px-10 srsTrendingSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea
          heading={"Trending Products"}
          link={"/"}
          linkLabel={"View All"}
          icon={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 ">
            <ProductCardSm imgLink={"/images/slider_medcine.png"} ratingScore={"5.0"} title={"Sunscreen Stick 250ml"} link={"/"} disPrice={"$20.00"} normalPrice={"$60.00"}/>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
