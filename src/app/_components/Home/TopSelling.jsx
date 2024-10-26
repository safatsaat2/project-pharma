"use client";

import React, { useEffect, useState } from "react";
import HeadingArea from "../Heading/HeadingArea";
import ProductCardSm from "../ProductCard/ProductCardSm";
import "./TopSelling.css";

const TopSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/dummy-data.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

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
          {products
            .sort((a, b) => b.rating - a.rating) 
            .slice(0, 8) 
            .map((product) => (
              <ProductCardSm
                key={product.id}
                imgLink={product.imageLink}
                ratingScore={product.rating}
                title={product.name}
                link={`/product/${product.id}`}
                disPrice={product.discountPrice}
                normalPrice={product.regularPrice}
                prExClasses={"!flex-row gap-5 items-center"}
                btnLabel={"Add To Cart"}
                btnExClasses={
                  "flex-row-reverse !px-4 !py-2 w-auto h-auto gap-2 !text-base"
                }
                imgExClasses={"max-w-[200px]"}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
