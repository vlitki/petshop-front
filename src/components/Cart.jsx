import { useContext } from "react";
import { AppContext } from "../context/AppContext.js";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

import { TiDeleteOutline } from 'react-icons/ti';


import "./Cart.css"


export default function Cart() {
  const app = useContext(AppContext);
  const cart = app.cart;

  const totalPrice = app.getTotalPrice();
  const {showCart, setShowCart} = useContext(AppContext);

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h1>Your Cart</h1>
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
            Show cart
          </button>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}

      <div className="product-container">
          {cart.length >= 1 && cart.map((product) => (
            <div className="product" key={product.id}>
              <img
                 src={'http://localhost:1337'+ product.attributes.image.data.attributes.url}
                 className="cart-product-image"
                 width="200"
                 height="200"
                 alt=""
                />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{product.attributes.title}</h5>
                  <h4>${product.attributes.price}</h4>
                </div>
                <div className="flex bottom">
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => app.onProductDecrement(product)}>
                    <AiOutlineMinusSquare size={30} />
                    </span>
                    <span className="num" >{product.quantity}</span>
                    <span className="plus" onClick={() => app.onProductAdd(product)}><AiOutlinePlusSquare size={30} /></span>
                    <span className="qty-total"><strong>Total: ${product.attributes.price * product.quantity}</strong> </span>
                    <span className="delete"><button
                    type="button"
                    className="remove-item"
                    onClick={() => app.onProductDelete(product.id)}
                  >
                    <TiDeleteOutline size={30}/>
                  </button>
                  </span>    
                  </p>
                   
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}