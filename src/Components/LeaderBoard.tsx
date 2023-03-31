import { useEffect, useState } from "react";

import "../css/LeaderBoard.css";
import { PlayerModel } from "../Models/PlayerModel";
import { getPlayerData} from "../Services/PlayerServices";

export function Leaderboard() {
  const [playerData, setPlayerData] = useState<PlayerModel[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPlayerData();
      setPlayerData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="leaderboard-container">
      <h1>LeaderBoard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Category</th>
            <th>Difficulty</th> */}
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((player) =>
            player.games &&
            player.games.map((game) => (
              <tr key={`${player.googleId}-${game.category}`}>
                <td>{player.name}</td>
                {/* <td>{game.category}</td>
                <td>{game.difficulty}</td> */}
                <td>{game.score}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      
    </div>
  );
}

