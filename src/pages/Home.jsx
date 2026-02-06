import AdminPage from "../components/AdminPage";
import CategoryNavbar from "../components/CategoryNavbar";
import Header from "../components/Header";
import PromoSection from "../components/PromoSection";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import ProductImageUploadPage from "./ProductImageUploadPage";
import ProductDetailPage from "./ProductDetailPage";
import AuthPage from "./AuthPage";


function Home() {
    return (
        <>
            <Header />
            <CategoryNavbar />
            <PromoSection />
            <AdminPage />
            <Routes>
                <Route path="/products/subcategory/:id" element={<ProductListPage />} />
                <Route path="/admin/products/upload-images/:productId" element={<ProductImageUploadPage />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
                <Route path="/login" element={<AuthPage />} />
            </Routes>
        </>
    )
}
export default Home;