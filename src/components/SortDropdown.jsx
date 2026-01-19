import React from "react";

export default function SortDropdown({ onSort }) {
  return (
    <select className="sort-dropdown" onChange={(e) => onSort(e.target.value)}>
      <option value="relevance">Relevance</option>
      <option value="low-high">Price: Low to High</option>
      <option value="high-low">Price: High to Low</option>
    </select>
  );
}
