import React from 'react'
import CountUp from 'react-countup';
import './../../styles/main/main.css';

export default function Countup({data, index}) {

    const {icon, title, start, end} = data;

  return (
            
            <div className="counter-box" key={index}>
                <h2>{icon}</h2>
                <h3>{title}</h3>

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
  )
}
