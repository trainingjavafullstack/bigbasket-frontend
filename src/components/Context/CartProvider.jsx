import { createContext, useContext, useState } from "react"

const CartContext = createContext();
export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item );
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }
    const removeFromCart = (id) => {
        return setCartItems(prev => prev.filter(item => item.id !== id));
    };
    const updateCart=(id, qty)=>{
        setCartItems(prev=>{
            return prev.map(item=>item.id===id?{...item,quantity:qty}:item)
        })
    }
    return (
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,updateCart}}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart=()=> useContext(CartContext);