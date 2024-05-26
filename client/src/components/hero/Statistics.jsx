import React from 'react'
import CountUp from 'react-countup';
import './../../styles/main/main.css';

export default function Statistics({data, index}) { 
  const {icon, title, start, end} = data;
  
  return (
    <div className="statistics-box" key={index}>
        <h2 className="icon">{icon}</h2>
        <h3 className="title">{title}</h3>

        <CountUp
            className="countup"
            start={start}
            end={end}
            duration={3}
            useEasing={true}
            //useGrouping={true}
            //separator=" "
            //decimals={4}
            //decimal=","
            //prefix="US"
            //suffix=" left"            
        />        
      </div>
  );
}