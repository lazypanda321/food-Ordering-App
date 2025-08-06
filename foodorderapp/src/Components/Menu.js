import React, { useState } from "react";
import { useParams } from "react-router-dom";
import restaurants from "./Restaurants";
import {useDispatch} from 'react-redux'
import {addToCart} from './Cart Functionality/addToCart'


function Menu() {
  /* const foodMenu = [
    { id: 1, name: 'Burger', price: 120, image: 'https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg' },
    { id: 2, name: 'Pizza', price: 250, image: 'https://septemberfarmcheese.b-cdn.net/wp-content/uploads/Blogs/Homemade-Pizza/homemade-pizza-monterey-jack-cheese.jpg' },
    { id: 3, name: 'Fries', price: 90, image: 'https://media.istockphoto.com/id/614420426/photo/basket-of-french-fries.jpg?s=612x612&w=0&k=20&c=o6IZg_NPJkOaICTa883jd49BwZvvI7wlP6SnjhyxqsI=' },
  ]; */
  const [cart, setCart] = useState([]);
  const { name } = useParams()
  const dispatch = useDispatch()
  const restaurant = restaurants.find((res)=> res.name === name)

  if (!restaurant) {
    return (
      <div>Restaurant ${name} not found</div> //?///
    )
  }

  const handleAddToCart = (item) => {
    /* setCart([...cart, item]); */
    dispatch (addToCart(item))
    alert(`${item.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to <span style={{ color: '#ff6347' }}>{restaurant.name}</span></h1>
      <h1 style={styles.subtitle}>Explore Our Delicious Menu</h1>

      <div style={styles.menuGrid}>
        {restaurant.menu.map((item) => (
          <div key={item.menuid} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3 style={styles.itemName}>{item.name}</h3>
            <p style={styles.price}>₹{item.price}</p>
            <button style={styles.button} onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#fdfdfd',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subtitle: {
    textAlign: 'left',
    color: 'Blue',
    marginBottom: '30px',
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemName: {
    fontSize: '1.2rem',
    margin: '10px 0 5px',
  },
  price: {
    color: '#666',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#ff6347',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Menu;
