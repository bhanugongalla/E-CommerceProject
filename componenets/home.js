import React from 'react'
import RealCardComponent from '../RealCardComponent'




export default function Home() {
  const styles={
    width:"100%"
  
  }
  return (
    <>
    <div id="demo" className="carousel slide " data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="Amazon1.jpg" alt="Los Angeles" className="d-block" style={styles}/>
    </div>
    <div className="carousel-item">
      <img src="Amazon2.jpg" alt="Chicago" className="d-block" style={styles}/>
      
    </div>
    <div className="carousel-item">
      <img src="Amazon3.jpg" alt="New York" className="d-block" style={styles}/>
  
    </div>
  </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>

  <div>
 <RealCardComponent/>
 </div>
    </>
  )
}
