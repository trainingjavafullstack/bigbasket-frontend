import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <div className="offer-tag">
        {product.discount}% OFF
      </div>

      <img src={product.image} alt={product.name} className="product-img" />

      <h4 className="brand">{product.brand}</h4>
      <p className="title">{product.name}</p>

      <select>
        <option>1 Unit</option>
        <option>2 Unit</option>
        <option>3 Unit</option>
        <option>4 Unit</option>
        <option>5 Unit</option>
      </select>

      <div className="price-section">
        <span className="price">₹{product.price}</span>
        <span className="mrp">₹{product.mrp}</span>
      </div>

      <button className="add-btn" onClick={() => addToCart(product)}>
        Add
      </button>
    </div>
  );
}
