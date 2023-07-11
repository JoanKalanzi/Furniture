import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import FurnitureList from './components/Show/Products/FurnitureList';
import AddFurniture from './components/Create/AddNewFurniture';
import { commerce } from './lib/commerce';
import NavTabs from './components/NavTabs';
import './index.css';
import Cart from './components/Cart/Cart';
import Login from './components/Login/login';
import AboutUs from './AboutUs/AboutUs';
import Checkout from './components/Checkout/Checkout1'


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products', error);

    }
  }
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddCart = async (productId, quantity) => {
    await commerce.cart.add(productId, quantity);
    fetchCart(); // Fetch the updated cart after updating it
  }

  const handleUpdateCart = async (productId, quantity) => {
    await commerce.cart.update(productId, { quantity });
    fetchCart()
  };
  const handleRemoveFromCart = async (productId) => {
     await commerce.cart.remove(productId);
     fetchCart()

  };
  const handleEmptyCart = async () => {
    await commerce.cart.empty();
    fetchCart()
    
  };
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = (userToken) => {
    sessionStorage.setItem('token', userToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <NavTabs isLoggedIn={isLoggedIn} handleLogout={handleLogout} totalItems={cart.total_items} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/show"
            element={<FurnitureList data={products} onAddToCart={handleAddCart} />}
          />
          <Route
            path ="/cart"
            element={<Cart cart={cart} 
            handleUpdateCart ={handleUpdateCart}
            handleRemoveFromCart ={handleRemoveFromCart}
            handleEmptyCart ={handleEmptyCart}
            />}
          />
          <Route path="/addNewFurniture" element={<AddFurniture />} />
          <Route path="/login" element={<Login setToken={handleLogin} />} />
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
