import { useCart } from "../Context/CartProvider";
import '../../style/cartDrawer.css'
import { PRODUCT_URL } from "../../services/ProductService";
export default function CartDrawer({ isOpen, onClose }) {
    const { cartItems, addToCart, removeFromCart, updateCart } = useCart();
    const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <div
                className={`overlay ${isOpen ? "show" : ""}`}
                onClick={onClose}
            />

            <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
                <div className="drawer-header">
                    <h3>My Cart</h3>
                    <button onClick={onClose}>✕</button>
                </div>

                <div className="drawer-body">
                    {cartItems.length === 0 && <p>Cart is empty</p>}

                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">

                            <img src={`${PRODUCT_URL}${item.image}`} alt={item.name} />

                            <div className="info">
                                <h4>{item.name}</h4>
                                <p>₹{item.price}</p>

                                <div className="qty-control">
                                    <button
                                        onClick={() =>
                                            updateCart(item.id, item.quantity - 1)
                                        }
                                    >−</button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            updateCart(item.id, item.quantity + 1)
                                        }
                                    >+</button>
                                </div>
                            </div>

                            <button
                                className="remove"
                                onClick={() => removeFromCart(item.id)}
                            >
                                🗑
                            </button>

                        </div>
                    ))}
                </div>

                <div className="drawer-footer">
                    <h3>Total ₹{totalCost.toFixed(2)}</h3>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </>
    );
}