import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
