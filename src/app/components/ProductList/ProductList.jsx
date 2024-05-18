import "./productlist.css";
import React from "react";
import { getProducts } from "../../api/products";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = async () => {
  const products = await getProducts();
  return (
    <>
      <div className="productsContainer">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;