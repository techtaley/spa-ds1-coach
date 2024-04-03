import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/main/main.css";

import { HiUserGroup } from "react-icons/Hi";
import { FaHandsHelping } from "react-icons/Fa";
import { GiGears } from "react-icons/Gi";

export default function MultiBoxHero({data, index}) { 
  const { title, desc, icon, bkg, btn } = data; 
  
  return (
      <div className={`box ${bkg}`} key={index}>
        {icon}
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link className="bold">{btn}</Link>
      </div>
  );
}
