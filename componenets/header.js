
import React, { useContext } from 'react'
import { BooksContext } from '../App';
import { Link } from 'react-router-dom';
// import Search from '../search'

export default function Headers() {
  const context = useContext(BooksContext);
 const styles={
    height:"50px",
    width:"50px",
    color:"Red"
  }
  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
   <h1 className="navbar-brand" href="nav" style={styles}>AMZ <sub>TM</sub></h1><br/>
    <div className='row'>
      <div className='d-flex justify-content-center'>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active"  href="/"><i class="bi bi-house"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg></i></a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/products">products</a>
        </li>
        <li className="nav-item">
       <Link to="/cart"> <a className="nav-link" href="/cart">My Cart ({totalCartCount}) </a></Link> 
       </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/register">Registration</a>
        </li>
       
      </ul>
      {/* <form className="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> 
        <Search/>
      </form> */}
      </div>
      </div>
    </div> 
  </div> 
  
</nav>
   </>
  )
}
{/* <span>My Cart({totalCartCount})</span>  */}