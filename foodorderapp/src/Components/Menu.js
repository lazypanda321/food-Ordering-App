import React , {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Menu() {

    const foodMenu = [
      { id: 1, name: 'Burger', price: 120 },
      { id: 2, name: 'Pizza', price: 250 },
      { id: 3, name: 'Fries', price: 90 },
    ];

  const [cart, setCart] = useState([]);
  const { name: encodedName } = useParams();
  const name = decodeURIComponent(encodedName);


  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };


 return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome To {name}</h1>
      <h2>Menu</h2>
      {foodMenu.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <span>{item.name} - ₹{item.price}</span>
          <button style={{ marginLeft: '10px' }} onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}
        
    </div>
 )
}


export default Menu