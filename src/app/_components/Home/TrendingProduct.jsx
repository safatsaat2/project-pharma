"use client"
import React from "react";
import { useProducts } from "@/app/Providers/ProductsProvider";
import HeadingArea from "../Heading/HeadingArea";
import ProductCardSm from "../ProductCard/ProductCardSm";


const TrendingProduct = () => {
  const {productsData} = useProducts();
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
          {productsData
            .slice(0, 4) // Limit to the first 4 items
            .map((product) => (
              <ProductCardSm
                key={product.id}
                imgLink={product.imageLink || "/images/slider_medcine.png"}
                ratingScore={product.rating || "5.0"}
                title={product.name || "Sunscreen Stick 250ml"}
                link={ `/products/${product.id}`}
                disPrice={`$${product.discountPrice || "20.00"}`}
                normalPrice={`$${product.regularPrice || "60.00"}`}
                btnExClasses={'!w-16'}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
