import React, { useState } from "react";

export default function FiltersPanel({ filters, onFilterChange }) {
  const [brandSearch, setBrandSearch] = useState("");

  return (
    <div className="filters-panel">
      <h3>Refined By</h3>

      <div className="filter-section">
        <h4>Brands</h4>

        <input
          type="text"
          placeholder="Search here..."
          value={brandSearch}
          onChange={(e) => setBrandSearch(e.target.value)}
        />

        {filters.brands
          .filter((b) => b.toLowerCase().includes(brandSearch.toLowerCase()))
          .map((brand, index) => (
            <label key={index}>
              <input
                type="checkbox"
                onChange={() => onFilterChange("brand", brand)}
              />
              {brand}
            </label>
          ))}
      </div>
    </div>
  );
}
