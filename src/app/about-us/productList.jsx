"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  // const [searchText, setSearchText] = useState("");

  const [products, setProducts] = useState([]);

  const [filteredProds, setFilteredProds]  = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const json = await res.json();

    setProducts(json ?? []);
    setFilteredProds(json ?? []);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleSearch = (searchText) => {

    const filteredProds = products.filter((val) => {
      return val.title.toLowerCase().includes(searchText.toLowerCase())
    })

    setFilteredProds(filteredProds)

  }

  return (
    <>
      <div className="flex items-center">
        <input
          type="text"
          className="border-2 border-slate-500"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="grid grid-cols-5 gap-16">
        {filteredProds.map((prod) => (
          <div>
            <Image
              width={500}
              height={500}
              src={prod.image}
              className="w-full h-[400px]"
            />
            <p>{prod.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;