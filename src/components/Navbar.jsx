import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AppContext } from "../context/AppContext.js";
import {FaHome} from "react-icons/fa";
import {TiShoppingCart} from "react-icons/ti";
import Cart from './Cart.jsx';
import "./Navbar.css";

function Navbar() {
  const {showCart, setShowCart} = useContext(AppContext);
 
  return (
 <div className = "navbar-container">
  <span><Link className="home-link" to='/'><FaHome size={45} /> </Link></span>
  <div className="title-container">
    <span className="cat-logo"></span>
    <div className="app-title"></div>
    <div className="dog-logo"></div>
  </div>
  <button type="button" className="cart-icon" onClick={() => setShowCart(true)}><TiShoppingCart size={45} /></button>
  {showCart && <Cart />}
  </div>
  )
}

export default Navbar