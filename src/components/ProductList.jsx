import * as React from 'react';
import { useEffect, useState } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart.jsx';
import { Modal } from 'bootstrap';


function ProductList({products}) {

    const { addToCart, cart, removeFromCart} = useCart();
  
    const checkProductInCart = product => {
      return cart.some(item => item.id === product.id);
    }

    return(
      <>
        
        <div className='row'>
          {products.map(product => {
            const isProductInCart = checkProductInCart(product);
            return (
                <div className="card mx-auto p-2" style={{ width: '18rem'}} key={product.id}>
                 <img src={product.image} className="card-img-top" alt="..."></img>
                 <div className="card-body">
                   <h5 className="card-title">{product.title}</h5>
                   <p className="card-text">${product.price}</p>
                   <p>{product.description}</p>
                 </div>
                 <div className="card-body">
                   <button style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                    onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>{
                    isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                   }</button>
                 </div>
                </div>  
            ) 
          })} 
          
        </div>

        
        
        </>
    )


}

export default ProductList;