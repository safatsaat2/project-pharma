"use client"
import React from "react";
import HeadingArea from "../Heading/HeadingArea";
import TopDiscountCard from "../ProductCard/TopDiscountCard";
import { useProducts } from "@/app/Providers/ProductsProvider";

const TopDiscount = () => {
  const { productsData } = useProducts();

  // Function to calculate discount percentage
  const calculateDiscountPercentage = (regularPrice, discountPrice) => {
    return ((regularPrice - discountPrice) / regularPrice) * 100;
  };

   // Prepare the products with discount percentage
   const sortedProducts = productsData
   .map((product) => ({
     ...product,
     discountPercentage: calculateDiscountPercentage(product.regularPrice, product.discountPrice),
   }))
   .sort((a, b) => b.discountPercentage - a.discountPercentage) 
   .slice(0, 3); 

  return (
    <div className="px-10 srsTopDiscountSection py-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto">
        <HeadingArea heading={"Top Discount"} icon={false} link={" "} />
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-5">
          {sortedProducts.map((product, index) => (
            index === 0 ? (
              <TopDiscountCard
                key={product.id}
                percentageDis={Math.round(product.discountPercentage)} 
                title={product.name}
                link={`/product/${product.id}`}
                description={product.description}
                disPrice={`${product.discountPrice.toFixed(2)}`} 
                normalPrice={`${product.regularPrice.toFixed(2)}`} 
                imgLink={product.imageLink || "/images/slider_medcine.png"}
                imgExtraClasses={"max-h-full"}
                extraClass={"items-stretch"}
                textExClasses={'self-center'}
              />
            ) : (
              <TopDiscountCard
                key={product.id}
                percentageDis={Math.round(product.discountPercentage)} 
                title={product.name}
                link={`/product/${product.id}`}
                description={product.description}
                disPrice={`${product.discountPrice.toFixed(2)}`} 
                normalPrice={`${product.regularPrice.toFixed(2)}`} 
                imgLink={product.imageLink || "/images/slider_medcine.png"}
                extraClass={"!row-span-1"}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDiscount;
