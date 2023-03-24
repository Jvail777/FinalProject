import "../css/QuestionCard.css";
import { useState } from "react";
import { Question } from "../../Models/Question";


interface ITriviaProps{
    
}

export function Trivia() {
 


  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

 
 


  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }
  return (
    <div className="Trivia">
      <h2>Trivia Question:</h2>
      <p>{questions[currentQuestionIndex]?.question}</p>
      <p></p>

      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}
