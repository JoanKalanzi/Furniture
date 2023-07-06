
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer/Footer';
import FurnitureList from './components/Show/FurnitureList';
import AddFurniture from './components/Create/AddNewFurniture';
import "./index.css";


function App() {
  const [data, setData] = useState([]);
console.log(data,'this data before update')
  useEffect(() => {
    const storedData = localStorage.getItem('furnitureData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleAddFurniture = (newFurniture) => {
    const updatedData = [...data, newFurniture];
    console.log(updatedData.push, "inside handleAddFurniture")
    setData(updatedData);
    localStorage.setItem('furnitureData', JSON.stringify(updatedData))
    console.log(localStorage, "localstorage");
  };

  return (
    <Router>
      <div>
      <NavTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route
            path="/show"
            element={<FurnitureList data={data} />}
          />
          <Route
            path="/addNewFurniture"
            element={<AddFurniture onAddFurniture={handleAddFurniture} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
