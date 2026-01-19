import React from "react";
import ProductCard from "./ProductCard";


export default function ProductGrid({ products, addToCart }) {
  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
