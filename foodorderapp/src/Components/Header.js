import React from 'react';
import Offers from './Offers';
import { useNavigate } from 'react-router-dom';

const Header = () => {

 const navigate = useNavigate();

 return (

  <div className="header">
    <h1>🍔 FoodieHub</h1>
    <h2><img className="headerImg" alt="header-Img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZ6_2H3Fz2ktHaHIFfQAOLuVwfGWp98G2Dg&s"/>Corporate</h2>
    <h2 onClick={()=>navigate(`/offers`)}>Offer 🏷️ </h2>
    <h2 onClick={()=>navigate(`/help`)}>Help ❓</h2>
    <h2>SignIn 👤</h2>
    <h2>Cart 🛒</h2>
  </div>

 )

}

export default Header;
