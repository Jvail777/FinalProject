import React, { useState } from "react";
// import { getQuestionsEasy, getQuestionsMedium, getQuestionsHard } from "../Services/QuestionServices";
// import { QuestionResponse } from "../Models/QuestionModel";
import { Link } from "react-router-dom";
import { AddQuestionChoices } from "../../helper/QuestionToQuestionChoice";
import { GetQuestions } from "../../Services/QuestionServices";

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
    let questions = GetQuestions(category,difficulty);
    var mappedQuestions = questions.then(data => data.data.map(x => AddQuestionChoices(x)));
    console.log(mappedQuestions);
    props.SetQuestions(mappedQuestions);
  }

  return (
    <div className="SetupGame">
        <form onSubmit={handleOnSubmit}>
      <select value={category} onChange={handleCategoryChange}>
        <option value="music">Music</option>
        <option value="history">History</option>
        <option value="film and tv">Film and TV</option>
        <option value="general knowledge">General Knowledge</option>
        <option value="society and culture">Society and Culture</option>
        <option value="sports and leisure">Sports and Leisure</option>
      </select>
      <select value={difficulty} onChange={handleDifficultyChange}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      
      <button type="submit" value="Submit">Start Game</button>
      
      </form>
    </div>
  );
}
