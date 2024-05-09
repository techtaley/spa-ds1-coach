import React from 'react'

export default function TopHero({data}) {
    const { title, desc, image } = data;
  return (
    <div className="bottom-hero">
        <div className="left">
            <p>{title}</p>          
            <h2>{desc}</h2>          
        </div>        
        <div className="banner-div">
           <img className="hero-img" src={image} />
        </div>        
    </div>  
  )
}
