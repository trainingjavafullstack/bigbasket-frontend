import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import '../style/Header.css';
import { useCart } from "./Context/CartProvider";
import CartDrawer from "./Cart/CartDrawer";
import { useState } from "react";

export default function Header() {
    const {cartItems}=useCart();
    const [openCart, setOpenCart] = useState(false);
    const totalItems=cartItems?.reduce((sum,item)=>sum+item.quantity,0);
    return (
        <>
        <header className="header">
            <div className="header-left">
                <img src="/logo.png" alt="JavaBasket" className="logo" />
            </div>
            <div className="header-center">
                <input type="text" placeholder="Search for Products.." className="search-input" />
            </div>
            <div className="header-right">
                <div className="location">
                    <FaMapMarkerAlt />
                    <span>Select Location</span>
                </div>
                <button className="login-btn">Login / Sign Up</button>

                <div className="cart" onClick={()=>setOpenCart(true)}>
                    <FaShoppingCart />
                    {totalItems>0 && (<span className="cart-count">{totalItems}</span>)}
                    
                </div>
            </div>
        </header>
        <CartDrawer isOpen={openCart} onClose={()=>setOpenCart(false)}/>
        </>
    );
}