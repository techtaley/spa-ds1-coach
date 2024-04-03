import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallMediumColumn({data}) {
    const { title, desc, btn, smimage, medimage } = data;

  return (
      <div className="small-medium-column">
          <div className="box">
              <h3>{title}</h3>
              <p>{desc}{" "}
              </p>
              <Link className="bold">{btn}</Link>
          </div>        
          <div className="small-box">
              <img className="hero-img" src={smimage} />
          </div>

          <div className="medium-box">
              <img className="hero-img" src={medimage} />
          </div>
      </div>
    )
}
