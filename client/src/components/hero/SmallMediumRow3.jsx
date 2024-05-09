import React from 'react'
import { Link } from 'react-router-dom';

export default function SmallMediumRow3() {
  return (
    <div className="small-medium-box">
        <div className="small-box">
            <img className="hero-img" src="https://place-hold.it/300x400/666/fff/000" />
        </div>

        <div className="medium-box">
            <img className="hero-img" src="https://place-hold.it/400x400/666/fff/000" />
        </div>

        <div className="box">
            <h3>Benefit 3</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <Link className="bold">Read more</Link>
        </div>
    </div>
  )
}

