import React from 'react'
import {  useParams } from 'react-router-dom'
export default function UserDetails() {
    const params = useParams()
    const userId = params.id
  return (
     
<>
       
      <div> user {userId} details </div>
       
        
 

</>
  )
}
