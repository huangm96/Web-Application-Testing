import React from "react";

const Dashboard = (props) => {
    console.log(props)
    
    return (
      <div className="DashboardContainer">
        <button onClick={() => props.handleScoresChange("strike")}>
          Strike
        </button>
            <button onClick={() => props.handleScoresChange("ball")}>ball</button>
        <button onClick={() => props.handleScoresChange("foul")}>foul</button>
        <button onClick={() => props.handleScoresChange("hit")}>hit</button>
      </div>
    );
}

export default Dashboard;
