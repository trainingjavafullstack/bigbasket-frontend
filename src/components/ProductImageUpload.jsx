import { useEffect, useState } from "react";
import { uploadImage } from "../services/ProductService";

export default function ProductImageUpload({productId}){
    const [files,setFiles]=useState([]);
    

    const handleUpload=async ()=>{
        const formData=new FormData();
        files.forEach(file=>{
            formData.append("files",file);
        })
        
         uploadImage(formData, productId)

    }
    return(<div>
        <input type="file" multiple onChange={(e)=>setFiles(Array.from(e.target.files))} />
        <button onClick={handleUpload}> Upload Images </button>
    </div>)
}