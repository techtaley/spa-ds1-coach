import React from 'react'

export default function BottomHero({data}) {
    const { title, desc, image } = data;

  return (
    <div className="bottom-hero">
        <div className="left">
          <h2>{title}</h2>          
          <p>{desc}</p>          
        </div>        
        <div className="banner-div">
          <img className="hero-img" src={image} />
        </div>        
    </div>
  )
}
