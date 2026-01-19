import React from "react";

export default function Breadcrumbs({ items }) {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
