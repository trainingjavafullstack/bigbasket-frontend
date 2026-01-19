import React, { useState } from "react";

export default function CategorySidebar({ categories }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="sidebar">
      <h3 onClick={() => setOpen(!open)}>Electronics</h3>
      {open && (
        <ul>
          {categories.map((c) => (
            <li key={c.name}>
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
