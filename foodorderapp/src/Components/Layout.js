import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
  return (
    <>
      <Header />
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/cart">Cart</Link> */}
      </nav>
      <Outlet />
       <Footer />
    </>
  );
};

export default Layout;
