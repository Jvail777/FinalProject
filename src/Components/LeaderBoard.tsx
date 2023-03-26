import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/LeaderBoard.css";
import { PlayerModel } from "../Models/PlayerModel";
// import { getLeaderboard } from "../Services/PlayerServices";

export function LeaderBoard() {

  // const [isSelected, setIsSelected] = useState(false);
  const [leaderboard, setLeaderboard] = useState();

  // let leaderboardHard = getLeaderboard("hard");
  // console.log(leaderboardHard);
  // leaderboardHard.then(res => res.map((x) => x.id))
  // console.log(leaderboardHard);

  return (
    <div className="LB-Header">
      <h1>LeaderBoard</h1>

      <div className="LB-Buttons">
        <button>Easy</button>
        <button>Medium</button>
        <Link to="/leaderboard?difficulty=hard">
        <button>Hard</button></Link>
        <div>{leaderboard}</div>
      </div>
  
    </div>
  );
}
