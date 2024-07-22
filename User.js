import React from 'react'
import {  Link, Outlet } from 'react-router-dom'

export default function User() {
 
  return (
    <>
 <nav>
<Link to="1">user1</Link>
<Link to="2">user2</Link>
<Link to="3">user3</Link>
</nav>
<Outlet/>
</>
    
 
  )
}
