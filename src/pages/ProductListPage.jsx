import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productsBySubCategoryId } from "../services/ProductService";

function ProductListPage() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsBySubCategoryId(id)
      .then(res => {
        console.log('sub with product ', res.data)
        setProducts(res.data);
      }
      ).catch(err => console.error(err));

  }, [id]);

  return (
    <div className="product-section">
      <div className="section-header">
        <h2>My Smart Basket</h2>
        <span className="view-all">View All</span>
      </div>

      <div className="product-grid">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
