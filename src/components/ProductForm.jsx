import { useEffect, useState } from "react";
import { addCategory, addSubCategory, fetchCategories, fetchSubCategoriesByCategory } from "../services/homeservice";
import { addProduct } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
    const navigate=useNavigate();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const [categoryId, setCategoryId] = useState("");
    const [newCategory, setNewCategory] = useState("");

    const [subCategoryId, setSubCategoryId] = useState("");
    const [newSubCategory, setNewSubCategory] = useState("");

    const [product, setProduct] = useState({
        name: "",
        price: "",
        mrp: "",
        brand: "",
        warranty:"",
        description:""
    });

    // Load categories on mount
    useEffect(() => {
        fetchCategories().then(res => setCategories(res.data));
    }, []);

    // Load subcategories when category changes
    useEffect(() => {
        if (categoryId) {
            fetchSubCategoriesByCategory(categoryId)
                .then(res => setSubCategories(res.data));
        }
    }, [categoryId]);

    const handleSave = async () => {
        let finalCategoryId = categoryId;
        let finalSubCategoryId = subCategoryId;

        // 1️⃣ Create category if new
        if (!categoryId && newCategory) {
            const catRes = await addCategory({ name: newCategory });
            finalCategoryId = catRes.data.id;
        }

        // 2️⃣ Create subcategory if new
        if (!subCategoryId && newSubCategory) {
            const subRes = await addSubCategory({
                name: newSubCategory,
                categoryId: finalCategoryId
            });
            finalSubCategoryId = subRes.data.id;
        }

        // 3️⃣ Create product
        const productRes=await addProduct({
            ...product,
            subCategoryId: finalSubCategoryId
        });
        const productId =productRes.data.id;
        navigate(`/admin/products/upload-images/${productId}`)
    };

    return (
        <div className="admin-form">

            <h3>Category</h3>
            <select onChange={e => setCategoryId(e.target.value)}>
                <option value="">Select Existing</option>
                {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>

            <input
                placeholder="Or New Category"
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
            />

            <h3>SubCategory</h3>
            <select onChange={e => setSubCategoryId(e.target.value)}>
                <option value="">Select Existing</option>
                {subCategories.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                ))}
            </select>

            <input
                placeholder="Or New SubCategory"
                value={newSubCategory}
                onChange={e => setNewSubCategory(e.target.value)}
            />

            <h3>Product</h3>
            <input
                placeholder="Product Name"
                onChange={e => setProduct({ ...product, name: e.target.value })}
            />
            <input
                placeholder="Product Description"
                onChange={e => setProduct({ ...product, description: e.target.value })}
            />
            <input
                placeholder="Price"
                onChange={e => setProduct({ ...product, price: e.target.value })}
            />
            <input
                placeholder="MRP"
                onChange={e => setProduct({ ...product, mrp: e.target.value })}
            />
            <input
                placeholder="BRAND"
                onChange={e => setProduct({ ...product, brand: e.target.value })}
            />
            <input
                placeholder="Warranty"
                onChange={e => setProduct({ ...product, warranty: e.target.value })}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}