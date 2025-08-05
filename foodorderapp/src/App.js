import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Cart from './Components/Cart';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Menu from './Components/Menu';
import Offers from './Components/Offers';
import Help from './Components/Help';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="/restaurants/:name" element={<Menu />}/> 
          <Route path="/offers" element={<Offers/>}/> 
          <Route path="/help" element={<Help/>}/> 
        </Route>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
