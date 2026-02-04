import { useEffect, useState } from "react";
import { getHomeProducts } from "../services/homeservice";
import ProductCard from "./ProductCard";
import '../style/productgrid.css'

function ProductSection() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getHomeProducts().then(res => setProducts(res.data))
    }, [])

    return (
        <div className="product-section">
            <div className="section-header">
                <h2>My Smart Basket</h2>
                <span className="view-all">View All</span>
            </div>

            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
export default ProductSection;