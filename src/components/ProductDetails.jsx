import { useState } from 'react';
import {useParams} from "react-router-dom";
import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai';
import {TiShoppingCart} from "react-icons/ti";
import { TiDeleteOutline } from 'react-icons/ti';

import { AppContext } from '../context/AppContext';
import {useContext} from "react";
import Product from './Product';
import "./ProductDetails.css";


function ProductDetails({products}) {
  const [index, setIndex] = useState(0);
  const [showProduct, setShowProduct] = useState(false)
  console.log(index)
  
  const app = useContext(AppContext);
  const productFromCart = app.getProductFromCart(index);
  const quantity = productFromCart ? productFromCart.quantity : 0;

  console.log(products)

  const params = useParams();
  console.log(params)
  const id = Number.parseInt(params.id, 10)
  let type = products.map(product => product.attributes.category.data.attributes.name)
  type = params.type;

  const filteredProducts = products.filter(product => product.attributes.category.data.id === id)
  const foundProducts = products.filter(product => product.id === index)
  console.log(foundProducts);
  const limit = 3;   
  
  return (
    <div className={!showProduct ? "pd-wrapper-wo-products" :"product-details-wrapper"}>
    <div className="categories-wrapper">
      <h2> Products for sale:  </h2>
        <div className="categories-container">
           {filteredProducts.slice(0, limit).map((item) => {
           return (
            <>
           <Product key={item.id} product={item} > </Product>
           <div className="button-container">
              <button onClick={()=> {
                  setIndex(item.id); 
                  setShowProduct(true)
                 }}
                  >View product</button> 
              </div> 
           </>       
           )
           })}
          </div>     
     </div>
     <div className="categories-wrapper-two">
      <h2> Products for sale:  </h2>
        <div className="categories-container-two">
           {filteredProducts.slice(limit, 6).map((item) => {
           return (
            <>
           <Product key={item.id} product={item} > </Product>
           <div className="button-container">
              <button onClick={()=> {
                  setIndex(item.id); 
                  setShowProduct(true)
                 }}
                  >View product</button> 
              </div>
           </>       
           )
           })}
          </div>     
     </div>

   <div className ={!showProduct ? "hidden-image-container" : "image-container"}>
    {showProduct && foundProducts.map((item)=> {
        return (
          <>
          <h3 className="product-details-title">{item.attributes.title}</h3>
          <img 
            src={item.attributes.image.data.attributes.url}
            width={500}
            height={500}
            className="product-image"
            alt={item.attributes.title}
            />
            <div className="product-info">
              <h4 className="product-details-heading">Details:</h4>
              <h4 className="product-details-price"> $ {item.attributes.price}</h4>
              <p className='product-details'>{item.attributes.description}</p>
              <span className="product-stock"> <strong> in stock: </strong> {item.attributes.stock}</span>
              <span className="product-status"> <strong>status:</strong> {item.attributes.status}</span>
            </div>
            <div className="product-details-cart-container">
              <span className="product-details-cart"><TiShoppingCart size={30} /></span>
            <div className="product-details-flex">
                <span className="product-details-minus" onClick={() => app.onProductDecrement(item)}><AiOutlineMinusSquare size={30} /></span>
                <span className="product-details-num">{quantity} </span>
                <span className="product-details-plus" onClick={() => app.onProductAdd(item)}><AiOutlinePlusSquare size={30}/></span>
              </div>
              <span className="delete">
                <button
                    type="button"
                    className="remove-item"
                    onClick={() => app.onProductDelete(item.id)}
                  >
                    <TiDeleteOutline size={30}/>
                </button>
              </span> 
          </div>
          </>
        )
        })}
    </div>
   </div>
  )
}

export default ProductDetails;