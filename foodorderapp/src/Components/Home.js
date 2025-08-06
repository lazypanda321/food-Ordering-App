import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import restaurants from './Restaurants';
  
function Home() {
 
    const navigate = useNavigate()
    return (
    <div className="res-list">
      {restaurants.map((item)=> (
        <RestaurantCard key={item.id} name={item.name} distance={item.distance} 
        rating={item.rating} cuisine={item.cuisine} image = {item.image} 
        onClick={()=>navigate(`/restaurants/${item.name}`)}/>
        
      ))}

    </div>
  );

}
export default Home;
