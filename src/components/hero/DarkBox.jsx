import React from "react";
import { Link } from 'react-router-dom';

export default function DarkBox({data}) {
    const { title, desc, btn } = data;

  return (
    <div className="box darkbkg">
      {/* <GiGears className="icons" /> */}
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link className="bold box-link">{btn}</Link>
    </div>
  );
}
