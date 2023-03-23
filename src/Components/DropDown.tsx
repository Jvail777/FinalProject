// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../css/DropDown.css'
// import { getQuestionsEasy, getQuestionsMedium, getQuestionsHard } from "../Services/QuestionServices";
// import { QuestionResponse } from "../Models/QuestionModel";


// const DifficultyType = [
//   {
//     value: 'getQuestionsEasy',
//     label: 'Easy Questions'
//   },
//   {
//     value: 'getQuestionsMedium',
//     label: 'Medium Questions'
//   },
//   {
//     value: 'getQuestionsHard',
//     label: 'Hard Questions'
//   }
// ];




// export function DropDown() {
//   // const [value, setValue] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//     setSelectedOption(event.target.value);
//   };


 




//   return (
//     <div className="DropDown">
//       <select className="Categories" value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Select A Category</option>
//         <option value="option1">Music</option>
//         <option value="option2">History</option>
//         <option value="option3">Film & TV</option>
//         <option value="option4">General Knowledge</option>
//         <option value="option5">Society & Culture</option>
//         <option value="option6">Sports & Leisure</option>
//       </select>

//       <select className="Difficulty" value={selectedOption} onChange={handleOptionChange}>
//         <option value="">Select Your Difficulty</option>
//         <option value="Easy">Easy</option>
//         <option value="Medium">Medium</option>
//         <option value="Hard">Hard</option>
//       </select>
//     <Link to="/QuestionCard">
//       <button>Start</button>
//       </Link>
//     </div>
//   );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface TriviaResponse {
  response_code: number;
  results: Question[];
}

const TRIVIA_API_URL = "https://the-trivia-api.com/api/questions?categories=music&limit=10&region=US&";

const Trivia: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(event.target.value);
  };

  const fetchQuestions = async () => {
    const response = await fetch(`${TRIVIA_API_URL}difficulty=${difficulty}`);
    const data = await response.json();
    setQuestions(data.results);
  };

  return (
    <div>
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
          <p>Difficulty: {question.difficulty}</p>
          <p>Correct Answer: {question.correct_answer}</p>
          <p>Incorrect Answers: {question.incorrect_answers.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Trivia;
