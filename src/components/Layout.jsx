import React from 'react'
import { HeadProvider, Title, Meta } from 'react-head';
import Footer from './Footer';
import Navbar from './Navbar';
import "./Layout.css"

function Layout( {children}) {
  return (
    <div className="layout">
    <HeadProvider>
      <Title>Petshop</Title>
      <Meta name="petshop" content="products for cats and dogs" />   
     </HeadProvider>
        <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
  </div>

  )
}

export default Layout