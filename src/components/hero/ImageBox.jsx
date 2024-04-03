import React from 'react'

export default function ImageBox({data}) {
    const { image } = data;

  return (
    <div className="stroke">
        <img
          className="hero-img"
          src={image}
        />
  </div>
  )
}
