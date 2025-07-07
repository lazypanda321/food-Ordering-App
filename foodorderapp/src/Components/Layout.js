import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';


const Layout = () => {
  return (
    <>
      <Header />
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
