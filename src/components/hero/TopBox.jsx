import React from 'react'
import { Link } from 'react-router-dom'

export default function TopBox({data}) {
    const {excerpt, story} = data;

  return (
    <div className="top-box">
        {/* <img
            className="hero-img"
            src="https://place-hold.it/200x150/666/fff/000"
        /> */}

      <div className="">
          <p> 
            {/* <span className="small-font bold">November 7, 2023 | category 1</span><br/> */}
            <span className="small-font">{excerpt}</span> &nbsp;&nbsp;
            <Link className="bold small-font"><button className="regular-button">{story}</button></Link>                       
          </p>  
          {/* <Link className="bold small-font"><button className="regular-button">Read more</button></Link> */}
      </div>
    </div> 
  )
}
