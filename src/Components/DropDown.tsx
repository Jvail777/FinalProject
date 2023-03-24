import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/DropDown.css'




interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}


const TRIVIA_API_URL = "https://the-trivia-api.com/api/questions?limit=10&region=US&";

export function DropDown() {
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [category, setCategory] = useState<string>("music");
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const fetchQuestions = async () => {
    const response = await fetch(`${TRIVIA_API_URL}category=${category}&difficulty=${difficulty}`);
    const data = await response.json();
    setQuestions(data.results);
  };

  return (
    <div>
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
      <Link to="/QuestionCard">
      <button onClick={fetchQuestions}>Fetch Questions</button>
      </Link>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <p>Category: {question.category}</p>
          <p>Difficulty: {question.difficulty}</p>
          <p>Correct Answer: {question.correct_answer}</p>
          <p>Incorrect Answers: {question.incorrect_answers.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};


