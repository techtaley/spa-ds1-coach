import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImg from '/assets/organic-6074992_640.png';
import { FiMenu } from 'react-icons/fi'

import "./nav.css";

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false); //closed

  useEffect(() => {
    //menu disappears after 3 seconds - Not working!
    const timer = setTimeout(() => setMenuToggle(false), 3000);
    return () => clearTimeout(timer);
  }, [menuToggle]);

  const menu = [
    {
      id: "1",
      title: "About",
      link: "about",
      className: "",
    },
    {
      id: "2",
      title: "Services",
      link: "services",
      className: "",
    },
    {
      id: "3",
      title: "Contact",
      link: "contact-us",
      className: "",
    }
  ];

  return (
    <nav className="nav">
      <div className="nav-div">

        <div className="nav-logo">
          <Link to="/">
            <img src={logoImg} alt="Coach logo" />
          </Link>
          <Link className="logo-text" to="/">CoachMe</Link>
        </div>

        <FiMenu
          className="nav-icon"
          onClick={() => setMenuToggle(!menuToggle)}
        />  
      </div>

      <div className={`nav-links ${menuToggle && "show"}`}>
          {menu.map((item) => (
              <NavLink className="nav-link" to={`/${item.link}`}>
                {item.title}
              </NavLink>
          ))}
      
      </div>
    </nav>
  );
}
