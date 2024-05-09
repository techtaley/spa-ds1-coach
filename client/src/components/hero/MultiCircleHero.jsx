import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/main/main.css";

import { HiUserGroup } from "react-icons/Hi";
import { FaHandsHelping } from "react-icons/Fa";
import { GiGears } from "react-icons/Gi";

export default function MultiCircleHero({data, index}) {
  const { title, desc, image } = data; 
  
  return (
    <div className="center" key={index}>
      <p className="box300 bold darkfont">
        <center>{title}</center>
        <hr className="hrbright" />
        <span className="brightfont">
          {desc}
        </span>
      </p>
      <img className="round300 borderdark" src={image} />
    </div>
  );
}
