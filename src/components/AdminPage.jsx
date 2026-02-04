import { useState } from "react";
import ProductForm from "./ProductForm";

export default function AdminPage(){
    const [showForm,setShowForm]=useState(false);
    return(<div>
        <button onClick={()=>setShowForm(true)}> Add Product</button>
        {showForm && <ProductForm/>}
    </div>)
}