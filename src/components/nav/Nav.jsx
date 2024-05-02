import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from '/assets/organic-6074992_640.png';
import { FiMenu } from 'react-icons/fi'
import data from "../../data/data.json";

import "./nav.css";

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false); //closed

  useEffect(() => {
    //menu disappears after 3 seconds - Not working!
    const timer = setTimeout(() => setMenuToggle(false), 3000);
    return () => clearTimeout(timer);
  }, [menuToggle]);

  const nav = [
    {
      id: "0",
      title: "services",
      link: "services",
    },
    {
      id: "1",
      title: "about",
      link: "about",
    },

    {
      id: "3",
      title: "contact",
      link: "contact",
    }
  ];

  return (
    <nav className="nav">
      <div className="nav-div">

        <div className="nav-logo">
          {/* <Link to="/"><img src={logoImg} alt="Coach logo" /></Link>
          <Link className="logo-text" to="/">CoachMe</Link> */}

          <a href="#home" ><img src={logoImg} alt="Coach logo" /></a>
          <a href="#home" className="logo-text"><h1>CoachMe</h1></a>            

        </div>

        <FiMenu
          className="nav-icon"
          onClick={() => setMenuToggle(!menuToggle)}
        />  
      </div>

      <div className={`nav-links ${menuToggle && "show"}`}>
          {nav.map(item => (
              // <NavLink className="nav-link" to={`/${item.link}`}>
              //   {item.title}
              // </NavLink>
              <a href={`#${item.link}`} className="nav-link">
                {item.title}
              </a>              
          ))}
      
      </div>
    </nav>
  );
}
