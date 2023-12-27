import { useId, useState } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx"
import "./../styles/Cart.css"
import { useCart } from "../hooks/useCart.jsx";

function CartItem ({ image, price, title, quantity, addToCart, removeItem }) {
    return (
      <li>
        <img
          src={image}
          alt={title}
        />
        <div>
          <strong>{title}</strong> - ${price}
        </div>
  
        <footer>
          <small>
            Cantidad: {quantity}
          </small>
          <button onClick={addToCart}>+</button>
          <button onClick={removeItem}>-</button>
        </footer>
      </li>
    )
  }

export function Cart() {

    const cartCheckBoxId = useId();

    const { cart, clearCart, addToCart, total, removeItem } = useCart();
    
    return (
        <>
        <label className="cart-button" htmlFor={cartCheckBoxId}>
            <CartIcon/>
        </label>
        <input id={cartCheckBoxId} type="checkbox" name=""  hidden/>

        <aside className="cart">
            <ul>
            {cart.map(product => (
                
                <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                removeItem={() => removeItem(product)}
                {...product}
                />
                
          ))}
            </ul>
            <strong>total: ${total.toFixed(2)}</strong>
            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
            <button  type="button" className="btn btn-success">Buy</button>
        </aside>
        </>
    )
    
}