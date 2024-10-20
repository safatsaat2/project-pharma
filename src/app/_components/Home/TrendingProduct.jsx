
import React from "react";
import HeadingArea from "../Heading/HeadingArea";
import Image from "next/image";

const TrendingProduct = () => {
  return (
    <section className="px-10 srsTrendingSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea heading={"Trending Products"} link={"/"} linkLabel={"View All"} icon={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-2 rounded-xl border border-slate-300">
                <Image src={"/images/slider_medcine.png"} width={200} height={200} className="w-full h-[200px] bg-slate-100 object-cover rounded-md" />
                <div className="flex items-center gap-1 ">

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
