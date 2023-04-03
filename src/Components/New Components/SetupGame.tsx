import React, { useState } from "react";
import { GetQuestions } from "../../Services/QuestionServices";
// import "../../css/SetupGame.css";

interface ISetupGameProps{
    SetQuestions: Function;
}


export function SetupGame(props:ISetupGameProps) {
    const [difficulty, setDifficulty] = useState<string>("easy");
    const [category, setCategory] = useState<string>("music");

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    GetQuestions(category,difficulty).then(x => props.SetQuestions(x));
  }

  return (
    <div className="SetupGame">
        <form onSubmit={handleOnSubmit}>
      <select className="dropdown-category" value={category} onChange={handleCategoryChange}>
        <option value="music">Music</option>
        <option value="history">History</option>
        <option value="film_and_tv">Film and TV</option>
        <option value="general_knowledge">General Knowledge</option>
        <option value="society_and_culture">Society and Culture</option>
        <option value="sport_and_leisure">Sports and Leisure</option>
      </select>
      <select className="dropdown-difficulty" value={difficulty} onChange={handleDifficultyChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      
      <button type="submit" value="Submit">Start Game</button>
      
      </form>
    </div>
  );
}
