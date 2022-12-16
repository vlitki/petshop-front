import React from 'react'
import HeroBanner from './HeroBanner';
import Category from './Category';
import  "./Home.css"

function Home( {products}) {
    const catProducts = products.filter((product, idx) => idx === 0 || idx === 5  || idx === 7) 
    const dogProducts = products.filter((product, idx) => idx === 12  || idx === 17 || idx === 22)
  
    return (
    <>
    <HeroBanner />
    <div className="products-container">
      <ul>
        <div className="home-categories"><h3>Cat products</h3></div>
        {catProducts.map((product) => <Category key={product.id} product={product}></Category>)}
      </ul>
      <div>
        <div className="home-categories"><h3>Dog products</h3></div>
        {dogProducts.map((product) => <Category key={product.id} product={product}></Category>)}
      </div>
   </div> 
   </>
  )
}

export default Home