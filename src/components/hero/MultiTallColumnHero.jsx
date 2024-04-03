import  React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../styles/main/main.css";

import { HiUserGroup } from "react-icons/Hi";
import { FaHandsHelping } from "react-icons/Fa";
import { GiGears } from "react-icons/Gi";
import { openModal } from "../../store/modalSlice";
import { useDispatch } from "react-redux";

export default function MultiTallColumnHero({data, index, setMembershipType, membershipType}) {
  const dispatch = useDispatch()
  const { title, desc, icon, bkg, btn } = data;

  const handleSubmit = e => {
    e.preventDefault()

    setMembershipType({title})
    console.log(membershipType)

    if (membershipType.title === "Free Member") {
      dispatch(openModal())
    }    
  }
  
  return (
      <div className={`box tall ${bkg}`} key={index}>
        {icon}
        <h2 className="centeralign">{title}</h2>
        <ul className="bulleted-list">
          {desc.map(item =>
            <li>{item}</li>
          )}
        </ul>
            <Link className="darkbtn" onClick={(e) => handleSubmit(e, title)}>{btn}</Link>
      </div>
  );
}
