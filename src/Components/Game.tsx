import { useContext, useState } from "react";
import { Question } from "../Models/Question";
import { updatePlayer } from "../Services/PlayerServices";
import { SetupGame } from "./SetupGame";
import { QuestionCard } from "./QuestionCard";
import AuthContext from "../context/AuthContext";
import { PlayerModel } from "../Models/PlayerModel";

interface IGameProps {
  GoToScoreCard: Function;
}

export function Game(props: IGameProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { user } = useContext(AuthContext);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  let score = 0;

  function setNewQuestions(questions: Question[]) {
    console.log(questions);
    setQuestions([...questions]);
    setDifficulty(questions[0].difficulty);
    setCategory(questions[0].category);
  }

  function saveUserData() {
    if (user !== null) {
      let games = { category: category, difficulty: difficulty, score: score };
      let player: PlayerModel = {
        googleId: user.uid,
        name: user.displayName ?? "default",
        games: [games],
      };
      updatePlayer(player, games);
      props.GoToScoreCard(games);
    }
  }
  
  function updateScore() {
    score++;
  }

  return (
    <div className="Game">
      {user === null && (
        <h1
          style={{
            textAlign: "center",
            color: "orange",
            fontSize: 60,
            paddingTop: 150,
          }}
        >
          Sign in to begin playing!
        </h1>
      )}
      {user !== null && questions.length === 0 && (
        <>
          <SetupGame SetQuestions={setNewQuestions} />{" "}
        </>
      )}
      {questions.length !== 0 && (
        <>
          <QuestionCard
            questions={questions}
            updateScore={updateScore}
            onGameEnd={saveUserData}
          />
        </>
      )}
    </div>
  );
}
