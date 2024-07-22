import Home from "./componenets/home";
import Aboutus from "./componenets/aboutus";
import Contactus from "./componenets/contactus";
import { Route, Routes, useParams} from "react-router-dom";
import Headers from "./componenets/header";
import Fulltime from "./Fulltime"
import Parttime from "./Parttime";
import Employee from './Employee'
import User from "./User";
import UserDetails from "./UserDetails";

// import Cart from "./Cart";
import Product from "./Product";
import RealCardComponent from "./RealCardComponent";

// import ShowProducts from "./ShowProducts";
import React, {  useState } from "react";
import Cart from "./Cart";
import Register from "./Register";
import { createContext } from "react";




export const BooksContext = createContext();
function App() {
  
 
  const [state, setState] = useState({
   
    cart: []
  });

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }]
    });
  };
  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });
    const increase = (id) => {
      setState({
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
      });
    };

    const decrease = (id) => {
      setState({
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
            : cartItem
        )
      });
    };
  return(
  <>
      <BooksContext.Provider
  value={{state,addToCart, increase, decrease, removeFromCart }}
>
    <Headers />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="aboutus" element={<Aboutus/>}/>
    <Route path="contactus" element={<Contactus/>}/>
   <Route path="employees" element={<Employee/>}>
            <Route path="fulltime" element={<Fulltime/>}/>
            <Route path="parttime" element={<Parttime/>}/>
         </Route>
    <Route path="user" element={<User/>}>
        <Route path=":id" element={<UserDetails/>}/>
    </Route>

   <Route path="/products" element= { 
    
    <RealCardComponent/>}/>
    <Route path="/products/:id" element={<Product/>}/>

<Route path="/cart" element={<Cart/>}/>

    <Route path="/register" element={<Register/>}/>
    </Routes>   

   
    </BooksContext.Provider>
  </>
  );
 
    }

export default App;
