import React from "react";

function VideoHero({data}) {
  const { title, desc, link} = data  
  
  return (
    <div className="hero right-hero">
      <div className="lightsquareborder">
        <iframe
          width="400"
          height="300"
          src={link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="column-div-right hero">
        <p className="bold brightfont">Free Online Coding Bootcamp</p>
        <h2>
          Beginner Frontend Web Development videos are released in January.{" "}
        </h2>
      </div>
    </div>
  );
}

export default VideoHero;
