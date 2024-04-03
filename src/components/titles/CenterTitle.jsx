import React from 'react'

export default function CenterTitle({data}) {
  const { title, desc } = data
  
  return (
    <div className="center">
        <h2>{title}</h2>          
        <p className="desc-lg">{desc}</p>          
  </div>
  )
}
