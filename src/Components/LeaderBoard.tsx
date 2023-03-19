import * as React from "react";
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
        <button>Home</button>
        <button>Back</button>
      </div>
    </div>
  );
}
