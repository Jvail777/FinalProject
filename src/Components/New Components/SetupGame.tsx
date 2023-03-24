import React, { useState } from "react";
// import { getQuestionsEasy, getQuestionsMedium, getQuestionsHard } from "../Services/QuestionServices";
// import { QuestionResponse } from "../Models/QuestionModel";
import { Link } from "react-router-dom";

export function SetupGame() {
    const [difficulty, setDifficulty] = useState<string>("easy");
    const [category, setCategory] = useState<string>("music");

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="SetupGame">
        <form>
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
      </form>
      <Link to="/QuestionCard">
        {/* <button onClick={fetchQuestions}>Fetch Questions</button> */}
      </Link>
    </div>
  );
}
