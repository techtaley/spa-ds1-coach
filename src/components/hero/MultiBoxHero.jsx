import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./../../styles/main/main.css";
import GoogleCoachingForm from "../form/GoogleCoachingForm";

// import { HiUserGroup } from "react-icons/Hi";
// import { FaHandsHelping } from "react-icons/Fa";
// import { GiGears } from "react-icons/Gi";

export default function MultiBoxHero({data, index, setOpenForm, openForm, setSelected }) { 
  const { id, title, desc, icon, bkg, link, btn } = data; 

  const handleClick = (e) => {
    e.preventDefault();

    setSelected(e.target.id);
    
    setOpenForm(!openForm)
  }

  return (
    <>
      <div className={`box ${bkg}`} key={id}>        <h2>{title}</h2>
        <p>{desc}</p>
        <Link className="box-link" id={title} onClick={handleClick}>{btn}</Link>
      </div>
    </>
  );
}

