import { useEffect, useState } from 'react';

import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Home from './components/Home';

import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';

// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then(resp => {
    throw resp;
  });
};

const headers = { 'Content-Type': 'application/json' };

const App = () => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=*', { headers, method: 'GET' })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setProducts(data))
      .catch((error) => setError(error))
  }, [])
     console.log(products)


  return (
  <AppProvider>
  <BrowserRouter>
  <Layout>
  <Routes>
    {/*<Route exact path="/cart" element = {<Cart />} />*/}
    <Route path="/" element = { <Home products={products} />} />
    <Route exact path="/categories/:type/:id" element = {<ProductDetails products={products} />} />
  </Routes>
  </Layout>
  </BrowserRouter>
  </AppProvider>
  );
};

export default App;


