import { useEffect, useState } from "react";
import "../style/CategoryNavbar.css";
import { fetchCategories } from "../services/homeservice";
import { useNavigate } from "react-router-dom";

function CategoryNavbar() {
    const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetchCategories()
      .then(res => {
        setCategories(res.data);
        console.log("categories--> ", res.data)
        setActiveCategory(res.data[0]); // default selection
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <nav className="category-navbar">
      <div
        className="shop-category"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        Shop by Category

        {open && (
          <div className="mega-dropdown">

            {/* LEFT PANEL */}
            <div className="left-panel">
              {categories.map(cat => (
                <div
                  key={cat.id}
                  className={`category-item ${
                    activeCategory?.id === cat.id ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveCategory(cat)}
                >
                  {cat.name}
                </div>
              ))}
            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel">
              {activeCategory?.subCategories?.map(sub => (
                <div key={sub.id} className="subcategory" onClick={()=> navigate(`/products/subcategory/${sub.id}`)}>
                  {sub.name}
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </nav>
  );
}

export default CategoryNavbar;
