import * as React from "react";
import { Link } from "react-router-dom";
import "../css/LeaderBoard.css";

export function LeaderBoard() {
  return (
    <div className="LB-Header">
      <h1>LeaderBoard</h1>
      {/* What appears when button is clicked? New Page? */}
      <div className="LB-Buttons">
        <button>Easy</button>
        <button>Medium</button>
        <button>Hard</button>
      </div>
      <div className="LB-Footer">
      <Link to="/Home">
        <button>Home</button>
        </Link>
        <button>Back</button>
      </div>
    </div>
  );
}
