
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function RealCardComponent() {
  
    const[data,setData]=useState([])
    const [filter,setFilter] =useState(data)
    let componentMounted=true;
    useEffect(()=>{ 
      const products = async ()  =>{    
          const response = await  fetch("https://fakestoreapi.com/products")
                if(componentMounted){
                   setData(await response.clone().json());
                   setFilter(await response.json());
                   console.log(filter)

                }
      }
      products()
    },[])   
  const filterProduct=(cat)=>{
    const updatedList= data.filter((x)=>x.category===cat)
    setFilter(updatedList)
    

  }
 
  return (
    <>
   
 <div className='container my-5 py-5'>
    <div className='row'>
       <div className='col-12 mb-5'>
        <h1 className="display-6  fw-bolder text-center">Latest Products</h1>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Mens Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>  Women's Clothing</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>  Jewelery</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}> Electronic </button>
        <div className="row justify-content-center">
  

        </div>
        </div>
       <hr/>

    
        <hr/> 
   <Link to="/products">
<div className="row justify-content-center">
    { 
        filter.map(product=> (
                      <div className="col-md-3   mb-4">
                      <div className="card h-100 text-center p-4" key={product.id}>
    <img className="card-img-top" src={product.image} alt={product.title} height='250px'/>
    <div className="card-body">
      <h5 className="card-title mb-0">{product.description.substring(0,12)}</h5>
      <p className="card-text">{product.price}</p>
      <Link to={`/products/${product.id}`}className="btn btn-outline-dark">BuyNow</Link>
   
      
   
</div>
</div>
</div>
        ))
      
    }
    
    </div>
    </Link>
    </div>
</div>
</div>
 
    </>
  )}
