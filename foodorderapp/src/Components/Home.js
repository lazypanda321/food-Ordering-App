import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
  
function Home() {
 
    const navigate = useNavigate()

    const restaurants = [
        {id:1,name:"PunjabiDhaba",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"BigDaddy",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"BurgerKing",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"Karim's",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"Sehzaade",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"AzadHindDhaba",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"Dominos",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"Chinmay",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"DilliFood",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"BengaliFood",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"BihariDhaba",distance:"2km",rating:"4-Star",cuisine:"Indian"},
        {id:1,name:"Rajhans",distance:"2km",rating:"4-Star",cuisine:"Indian"}
    ]

    return (
    <div className="res-list">
      {restaurants.map((item)=> (
        <RestaurantCard key={item.id} name={item.name} distance={item.distance} 
        rating={item.rating} cuisine={item.cuisine}
        onClick={()=>navigate(`/restaurants/${item.name}`)}/>
        
      ))}
     
    </div>
  );

}
export default Home;
