"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/dummy-data.json");
                if (!response.ok) throw new Error("Failed to fetch data");
                const data = await response.json();
                setProductsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <ProductsContext.Provider value={{ productsData, loading }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
