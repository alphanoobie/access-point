import React from 'react'
import "./home.css"
import image1 from "../assets/img/homepic.jpg"

const Home = () => {
return (
<div className='hero-container'>
  <img className="image1" src={image1} alt="" />
  <div className='hero-para'>
    <h1><span className='need'>Need</span>Service</h1>
  </div>
  <h4>WE CAN HELP YOU</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus ratione voluptatibus.</p>
  <div className="images">

  </div>

</div>
)
}

export default Home