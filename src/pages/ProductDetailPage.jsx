import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadProduct, PRODUCT_URL } from "../services/ProductService";
import '../style/ProductDetailsPage.css';
import { useCart } from "../components/Context/CartProvider";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const { productId } = useParams();
  const {cartItems,addToCart,removeFromCart,updateCart} =useCart();

  useEffect(() => {
    loadProduct(productId).then(res => {
      setProduct(res.data);
      setSelectedImage(res.data.imageUrls[0]);
    }).catch(err => console.log(err));
  }, [productId])

  const handleAddToCart = () => {
    addToCart({
      id:product.id,
      name: product.name,
      price: product.price,
      image: selectedImage
    })
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