import React from "react";
import { Link } from 'react-router-dom';
import './../../styles/main/main.css';

export default function LeftEvent({ data }) {
    const { day, month, time, title, excerpt, btn } = data;

  return (
    <div className="left-excerpt">
      <div className="darkbkg event">
        <h2>{day} <span>{month}</span></h2>
      </div>

      <div className="column-div-left">
        <p className="small-font">
          <span className="bold">{time}</span> <br/>
          <hr />    
          <span className="small-font">{title}{' '}{excerpt}</span> &nbsp;
          <Link className="bold small-font">
            <button className="regular-button">{btn}</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
