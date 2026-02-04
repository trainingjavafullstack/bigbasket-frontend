import React, { useState } from "react";

import productsData from '../data/products.json';
import SortDropdown from "./SortDropdown";
import ProductGrid from "./ProductGrid";
import FiltersPanel from "./FiltersPanel";
import Breadcrumbs from "./Breadcrumbs";
import CategorySidebar from "./CategorySidebar";
import '../style/categoryPage.css'
export default function CategoryPage() {
  const [products, setProducts] = useState(productsData);

  const handleSort = (method) => {
    let sorted = [...products];
    if (method === "low-high") sorted.sort((a, b) => a.price - b.price);
    if (method === "high-low") sorted.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  return (
    <div className="category-page">

      <Breadcrumbs items={['Home', 'Electronics', 'Audio Devices']} />

      <div className="layout">
        
        <CategorySidebar categories={[
          { name: "Earbuds" },
          { name: "Headphones" },
          { name: "Neckbands" }
        ]} />

        <FiltersPanel
          filters={{
            brands: ["Apple", "Sony", "JBL", "Boat", "Noise"]
          }}
          onFilterChange={() => {}}
        />

        <div className="main-content">
          <div className="top-bar">
            <h3>Audio Devices (1044)</h3>
            <SortDropdown onSort={handleSort} />
          </div>

          <ProductGrid products={products} />
        </div>

      </div>
    </div>
  );
}
