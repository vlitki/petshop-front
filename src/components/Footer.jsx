import React from 'react'
import "./Footer.css"

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Ecommerce Practice ${year}`}</footer>;
  };
  
  export default Footer;