import React from "react";
import "./../../styles/main/main.css";
import roundImg from "./../../assets/pexels-monstera-production-7412094.jpg";

export default function RoundPhoto({data}) {
    const { title, image } = data;

  return (
    <div>
      <span className="bold">
        <center>{title}</center>
      </span>
      <br />
      <img className="round300" src={image} />
    </div>
  );
}
