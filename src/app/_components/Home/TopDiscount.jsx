import React from "react";
import HeadingArea from "../Heading/HeadingArea";
import Image from "next/image";

const TopDiscount = () => {
  return (
    <div className="px-10 srsTopDiscountSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea heading={"Top Discount"} icon={false} link={" "} />
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-5">
          <div className="row-span-2 bg-slate-200 p-4 pb-0 rounded-2xl flex items-center gap-5">
            <div>
              <p className="text-white bg-primary text-sm px-3 py-2 rounded-3xl w-fit mb-3">
                25% OFF
              </p>
              <h3 className="text-slate-900 text-4xl mb-3">Black Garlic Oil</h3>
              <p className="text-slate-600 capitalize mb-5">
                Stronger and thicker hair with black garlic
              </p>
              <del className="text-md text-slate-400 ">$60.00</del>
              <span className="text-2xl text-slate-700 pl-2">$20.00</span>
            </div>
            <Image
              width={300}
              height={200}
              className="w-full h-full object-cover"
              src={"/images/slider_medcine.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDiscount;
