import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function Employee() {
  return (
    <>
    employee
    <Link to="fulltime"> fulltime
                                            </Link>

    <Link to="parttime" >partttime </Link>
   
    <Outlet/>
</>
  )
}
