import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadProduct, PRODUCT_URL } from "../services/ProductService";

export default function ProductDetailPage(){
    const [product, setProduct]=useState(null);
    const {productId} = useParams();

    useEffect(()=>{
        loadProduct(productId).then(res=>setProduct(res.data)).catch(err=>console.log(err));
    },[id])

    if (!product) return <p>Loading...</p>;
    return (
    <div className="product-detail">
      <img src={`${PRODUCT_URL}${product.imageUrls[0]}`} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price} <span className="mrp">₹{product.mrp}</span></h3>
    </div>
  );

}