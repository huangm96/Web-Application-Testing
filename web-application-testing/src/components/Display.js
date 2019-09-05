import React from "react";


const Display=(props)=> {
    console.log(props)
  return (
    <div className="DisplayContainer">
          <h2>Balls: {props.balls} </h2>
          <h2>Strikes: {props.strikes}</h2>
    
    </div>
  );
}

export default Display;
