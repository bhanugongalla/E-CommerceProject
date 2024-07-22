import React  from 'react'


export default function Addtocart() {

  return (
    <>
    
    <div>


     {
      filter=>filter.map((card)=>(
        <li key={card.id}>
          {card.id} {card.price} {card.title}
        </li>
      ))
     }
   
    </div>
   
    </>
  )
  
  
}

                   
                   
        
