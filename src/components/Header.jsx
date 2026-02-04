import { FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import '../style/Header.css';

export default function Header() {
    return (
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

                <div className="cart">
                    <FaShoppingCart />
                    <span className="cart-count">0</span>
                </div>
            </div>
        </header>
    )
}