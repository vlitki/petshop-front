import React from 'react';
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ product }) => {
  return (
        <div className="product-card">
          <Link to={'/categories/' + product.attributes.category.data.attributes.name + '/'+ product.attributes.category.data.id}>
          <img 
            src={'http://localhost:1337'+ product.attributes.image.data.attributes.url}
            width={300}
            height={300}
            className="product-image"
            alt={product.attributes.title}
          />
          </Link>
          <p className="product-category-name">{product.attributes.category.data.attributes.name}</p>
        </div>
  )
}

export default Category