import React from "react";
import { Link } from 'react-router-dom';

export default function LightBox({data}) {
  const {title, desc, btn } = data;
  
  return (
    <div className="box lightbkg">
      {/* <GiGears className="icons" /> */}
      <h3>{title}</h3> 
      <p>{desc}</p>
      <Link className="bold box-link">{btn}</Link>
    </div>
  );
}
