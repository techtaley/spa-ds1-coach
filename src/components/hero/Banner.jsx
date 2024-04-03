import React from "react";

export default function Banner({data}) {
  const { image } = data;

  return (
    <div className="banner-div">
        <img
          className="hero-img"
          src={`./../../assets/${image}`}
        />
    </div>
  )
}
