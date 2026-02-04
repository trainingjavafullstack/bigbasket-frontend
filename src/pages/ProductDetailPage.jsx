import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadProduct, PRODUCT_URL } from "../services/ProductService";
import '../style/ProductDetailsPage.css';

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    loadProduct(productId).then(res => {
      setProduct(res.data);
      setSelectedImage(res.data.imageUrls[0]);
    }).catch(err => console.log(err));
  }, [productId])

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedImage,
      quantity: 1
    };

    console.log("Added to cart:", cartItem);

    // Later we will connect this to Context API
  };

  if (!product) return <p>Loading...</p>;
  return (
    <div className="product-detail">

      {/* LEFT IMAGE SECTION */}
      <div className="left">

        {/* Thumbnails */}
        <div className="thumbnail-column">
          {product.imageUrls.map((img, index) => (
            <img
              key={index}
              src={`${PRODUCT_URL}${img}`}
              alt={`thumb-${index}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""
                }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="main-image-wrapper">
          <img
            src={`${PRODUCT_URL}${selectedImage}`}
            alt={product.name}
            className="main-image"
          />
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="right">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price} <span className="mrp">₹{product.mrp}</span></h3>
        <button
          className="add-basket-btn"
          onClick={handleAddToCart}
        >
          Add to Basket
        </button>
      </div>
    </div>

  );

}