import React from "react";
import HeadingArea from "../Heading/HeadingArea";
import TopDiscountCard from "../ProductCard/TopDiscountCard";

const TopDiscount = () => {
  return (
    <div className="px-10 srsTopDiscountSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea heading={"Top Discount"} icon={false} link={" "} />
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-5">
          <TopDiscountCard percentageDis={"25"} title={"Black Garlic Oil"} link={"/"} description={"Stronger and thicker hair with black garlic"} disPrice={"20.00"} normalPrice={"60.00"} imgLink={"/images/slider_medcine.png"} imgExtraClasses={"max-h-full"} extraClass={"items-stretch  "} textExClasses={'self-center'}/>
          <TopDiscountCard percentageDis={"25"} title={"Black Garlic Oil"} link={"/"} description={"Stronger and thicker hair with black garlic"} disPrice={"20.00"} normalPrice={"60.00"} imgLink={"/images/slider_medcine.png"}  extraClass={"row-span-1"}/>
          <TopDiscountCard percentageDis={"25"} title={"Black Garlic Oil"} link={"/"} description={"Stronger and thicker hair with black garlic"} disPrice={"20.00"} normalPrice={"60.00"} imgLink={"/images/slider_medcine.png"} extraClass={"row-span-1"} />
        </div>
      </div>
    </div>
  );
};

export default TopDiscount;
