import { useParams } from "react-router-dom";
import ProductImageUpload from "../components/ProductImageUpload";


export default function ProductImageUploadPage() {
  const { productId } = useParams();

  return (
    <>
      <h2>Upload Product Images</h2>
      <ProductImageUpload productId={productId} />
    </>
  );
}
