import React from 'react'

const HeroSection = () => {
  return (
    <main className='hero container'>
    <div className='hero-content'>
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p> YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH 
            YOUR SHOES. THIS IS THE BEST SHOES FOR ALL WORK.
        </p>
    <div className='hero-btn'> 
        <button>Shop Now</button>
        <button className='secondary-btn'>Category</button>
    </div>

    </div>

    <div className='brand-icons'>
      
      <img src='/images/available.png'alt='avail'/> 
    </div>
    <div className='hero-image'>
        <img src='/images/shoes.png' alt='shoe'/>

    </div>
    </main>
  )
}

export default HeroSection;