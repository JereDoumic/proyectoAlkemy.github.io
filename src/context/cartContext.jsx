import { createContext, useState } from "react"

export const CartContext = createContext();

export function CartProvider({children}) {
    
    const [cart, setCart] = useState ([]);
    const [total, setTotal] = useState(0);
    

    const addToCart = (product) => {
        const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    
        
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            setTotal(total + product.price);
            setCart(newCart);
        } else {
           
            setTotal(total + product.price);
            setCart((prevState) => [
                ...prevState,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id != product.id));
        setTotal(0);
    }

    const removeItem = product => {
        setCart((prevState) => {
            const updatedCart = prevState.map((item) => {
                if (item.id === product.id) {
                   
                    return { ...item, quantity: Math.max(item.quantity - 1, 1) };
                }
                return item;
            });

            const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
            setTotal(newTotal);

            return updatedCart;
        });
    }


    return(
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, total, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}