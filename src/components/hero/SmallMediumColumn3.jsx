import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallMediumColumn3() {
  return (
      <div className="small-medium-column">
          <div className="box">
              <h3>Statistics</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <Link className="bold">Read more</Link>
          </div>        
          <div className="small-box">
              <img className="hero-img" src="https://place-hold.it/500x200/666/fff/000" />
          </div>

          <div className="medium-box">
              <img className="hero-img" src="https://place-hold.it/500x300/666/fff/000" />
          </div>
      </div>
    )
}
