import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
        <div className="product-card">
          <img 
            src={'https://petcommerce.herokuapp.com'+ product.attributes.image.data.attributes.url}
            width={250}
            height={250}
            className="product-image"
            alt={product.attributes.title}
          />         
         <div className="product-card-info">        
            <p className="product-name">{product.attributes.title}</p>
            <p className="product-price">${product.attributes.price}</p>
          </div>
        </div>
    </div>
  )
}

export default Product