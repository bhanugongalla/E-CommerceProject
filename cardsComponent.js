import React, { useEffect,useState } from 'react'
import axios from 'axios'






export default function CardsComponent() {
    const [products,setProducts]=useState([])
    

    const [count,setCount]=useState(0)
    useEffect(()=>{
     axios.get('https://fakestoreapi.com/products?limit=5')
   .then(res=>setProducts(res.data))
   .catch(err=>err)
    },[])
 

    
const AddToCard = (()=>{
  setCount(count +1)
})
const colur={
  color:"red"
}
const Styles={
  width:"70%",
  height:"50%"
}


 
 
  return (
    <>
    <div className="card">
    <div className='container'>
 <div className='row'>
    {
   products.map(card =>(
    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex align-items-stretch'>
    <div className="card mt-5">
       
      
        <div className="card-body d-flex flex-column"  >
       <div key={card.id}>
        <strong className="card-text" >{card.title}</strong>
        <p className="card-text" > <span style={colur}>₹{card.price}</span></p> 
        <strong className="card-text" > <u>{card.category}</u></strong> 
        <p className="card-text  mb-4" > 
        {card.description}
        </p> 
        <><img src={card.image} alt={card.err} style={Styles}/></><hr/>
     </div>

  <button type="button" className='btn btn-success' onClick ={AddToCard}>addtocart{count}</button>
</div>
       
   </div>     

        
      

  </div>
 
   
        ))
}

      


  </div>
  </div>
  </div>
    </>

  )

}


