


import React, { useState } from 'react';

const Product = ({ id, name, price, onAddToCart }) => (
  <div>
    <h3>{name}</h3>
    <p>${price}</p>
    <button onClick ={() => onAddToCart({ id, name, price })}>
      Add to Cart
    </button>
  </div>
);

const Cart = ({ cartItems }) => (
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  </div>
);
const AddFun = () => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  };

  return (
   
        <>
         <div>
      <h1>React Shopping App</h1>
      <Product id={1} name="Product 1" price={20} onAddToCart={addToCart} />
      <Product id={2} name="Product 2" price={30} onAddToCart={addToCart} />
      <Cart cartItems={cart} />
      </div>
     </>
  );
};

export default AddFun;


  
