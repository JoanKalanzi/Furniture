import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Signup from './components/Login/signup';
import Basket from './components/basket/Basket';
import FurnitureList from './components/Show/FurnitureList';
import AddFurniture from './components/Create/AddNewFurniture';
import Data from './components/data';
import "./index.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('furnitureData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

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

  const handleAddFurniture = (newFurniture) => {
    const updatedData = [...data, newFurniture];
    setData(updatedData);
    localStorage.setItem('furnitureData', JSON.stringify(updatedData));
  };

  return (
    <Router>
      <div>
        <NavTabs isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route
            path="/show"
            element={<FurnitureList data={Data} />}
          />
          <Route
            path="/addNewFurniture"
            element={<AddFurniture onAddFurniture={handleAddFurniture} />}
          />
          <Route path="/login" element={<Login setToken={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
