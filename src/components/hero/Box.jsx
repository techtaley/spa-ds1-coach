//import React from "react";
import { Link } from 'react-router-dom';
//import './../../styles/main/main.css';
// import {BsTelephoneInbound} from 'react-icons/Bs';
// import {MdOutlineAlternateEmail} from 'react-icons/Md';
// import {MdBusiness} from 'react-icons/Md';

export default function Box({data}) {
    const { icon, title, para, btn } = data;

  return (
    <div className="box nobkg">
      <h2 className="contactborder icons">{icon}</h2>
      <h3>{title}</h3>
      <p className="centeralign">
        {para}
      </p>
      <Link className="bold box-link">{btn}</Link>
    </div>
  );
}
