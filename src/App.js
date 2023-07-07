import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import FurnitureList from './components/Show/Products/FurnitureList';
import AddFurniture from './components/Create/AddNewFurniture';
import { commerce } from './lib/commerce';
import NavTabs from './components/NavTabs';
import "./index.css";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart ] = useState({})

 

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
     
      
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };
 console.log(products)
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()

    setCart(cart)
  }
 
  useEffect(() => {
    fetchProducts();
    fetchCart()
  }, []);

  const handleAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity )
    console.log(productId, 'this is id in app')
    // console.log(item, 'item')
    setCart(item.cart)
  }
  

  console.log(cart, 'cart')
  return (
    <Router>
      <div>
      <NavTabs totalItems ={cart.total_items}/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route
            path="/show"
            element={<FurnitureList data={products}  onAddToCart={handleAddCart}/>}
          />
          <Route
            path="/addNewFurniture"
            element={<AddFurniture />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

