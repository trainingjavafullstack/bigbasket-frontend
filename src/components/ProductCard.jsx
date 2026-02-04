import React from "react";
import '../style/productgrid.css';
import { calculateDiscount } from "../utilits/priceUtils";
import { useNavigate } from "react-router-dom";
import { PRODUCT_URL } from "../services/ProductService";

export default function ProductCard({ product, addToCart }) {
  const discount=calculateDiscount(product.mrp,product.price);
  const navigate=useNavigate();
  return (
    <div className="product-card">

      {discount>0 && 
      <div className="offer-tag">
        {discount} %OFF
      </div>}

      <img src={`${PRODUCT_URL}${product.imageUrls[0]}`} alt={product.name} className="product-img" onClick={()=> navigate(`/products/${product.id}`)}/>
      

      <h4 className="brand">{product.brand}</h4>
      <p className="product-name">{product.name}</p>

      <select className="qty-select">
        <option>1 Unit</option>
        
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
