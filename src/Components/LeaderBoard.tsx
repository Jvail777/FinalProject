import { useEffect, useState } from "react";
import { PlayerModel } from "../Models/PlayerModel";
import { getPlayerData } from "../Services/PlayerServices";
import "../css/Leaderboard.css"

export function Leaderboard() {
  const [playerData, setPlayerData] = useState<PlayerModel[]>([]);
  const [overallScores, setOverallScores] = useState<number[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPlayerData();
      setPlayerData(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const scores = playerData.map((player) => {
      const overallScore = player.games?.reduce((totalScore, game) => {
        return totalScore + game.score;
      }, 0);
      return overallScore ?? 0;
    });
    setOverallScores(scores);
  }, [playerData]);

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
            <th>Overall Score</th>
          </tr>
        </thead>
        <tbody>
          {playerData
            .filter((player, index) => player.games)
            .map((player, index) => ({
              player,
              overallScore: overallScores[index],
            }))
            .sort((a, b) => b.overallScore - a.overallScore)
            .map(({ player, overallScore }) => (
              <tr key={player.googleId}>
                <td>{player.name}</td>
                <td>{overallScore}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}