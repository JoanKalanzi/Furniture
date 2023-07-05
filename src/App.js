import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavTabs from './components/NavTabs';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import FurnitureList from './components/Show/FurnitureList';
import Create from './components/Create/Create';
import {data} from './components/data'

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="footer" element={<Footer />} />
          <Route path="Show" element={<FurnitureList  data ={data}/>} />
          {/* Define a route that will have descendant routes */}
          <Route path="create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

