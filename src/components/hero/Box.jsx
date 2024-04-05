import React from "react";
import { Link } from 'react-router-dom';

export default function Box({data}) {
    const { icon, title, desc, btn } = data;

  return (
    <div className="box nobkg">
      <h2 className="contactborder icons">{icon}</h2>
      <h3>{title}</h3>
      <p className="centeralign desc ">
        {desc}
      </p>
      <Link className="bold box-link">{btn}</Link>
    </div>
  );
}
