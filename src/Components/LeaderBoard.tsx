import { useEffect, useState } from "react";
import { PlayerModel } from "../Models/PlayerModel";
import { getPlayerData } from "../Services/PlayerServices";
import "../css/Leaderboard.css"

export function Leaderboard() {
  const [playerData, setPlayerData] = useState<PlayerModel[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPlayerData();
      setPlayerData(data);
    }

    fetchData();
  }, []);

  
  const allGameScores = playerData.flatMap(
    (player) => player.games?.map((game) => game.score) ?? []
  );

  
  allGameScores.sort((a: number, b: number) => b - a);

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {playerData
            .filter((player) => player.games)
            .flatMap((player) =>
              (player.games ?? []).map((game) => ({ player, game }))
            )
            .sort((a, b) => b.game.score - a.game.score)
            .map(({ player, game }) => (
              <tr key={`${player.googleId}-${game.category}`}>
                <td>{player.name}</td>
                <td>{game.score}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
