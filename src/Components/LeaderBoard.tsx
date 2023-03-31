// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../css/LeaderBoard.css";
// import { PlayerModel } from "../Models/PlayerModel";
// import { getPlayerData} from "../Services/PlayerServices";

// // export function LeaderBoard() {

// //   // const [isSelected, setIsSelected] = useState(false);
// //   const [leaderboard, setLeaderboard] = useState();

// //   let leaderboardHard = getLeaderboard("hard");
// //   console.log(leaderboardHard);
// //   // leaderboardHard.then(res => res.map((x) => x.name = "Melissa"))
// //   console.log(leaderboardHard);


//   export function Leaderboard() {
//     const [playerData, setPlayerData] = useState<PlayerModel[]>([]);
  
//     useEffect(() => {
//       async function fetchData() {
//         const data = await getPlayerData();
//         setPlayerData(data);
//       }
  
//       fetchData();
//     }, []);



//   return (
//     <div className="LB-Header">
//       <h1>LeaderBoard Coming Soon!</h1>

//       return (
//     <div>
//       {playerData.map((player) => (
//         <div key={player.id}>
//           <span>{player.name}</span>
//           {player.games && player.games.length > 0 && (
//             <span>{player.games[0].score}</span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
      
//       {/* <div className="LB-Buttons">
//         <button>Easy</button>
//         <button>Medium</button>
//         <Link to="/leaderboard?difficulty=hard">
//         <button>Hard</button></Link>
//         <div>{leaderboard}</div>
//       </div> */}
  
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
              <tr key={`${player.id}-${game.category}`}>
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

