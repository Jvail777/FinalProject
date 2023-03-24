import "../css/QuestionCard.css";
import { useState } from "react";
import { useEffect } from "react";

export function Trivia() {
  interface TriviaQuestion {
    question: string;
    answer: string;
  }
  // interface Question {
  //   category: string;
  //   type: string;
  //   difficulty: string;
  //   question: string;
  //   correct_answer: string;
  //   incorrect_answers: string[];
  // }

  const TRIVIA_API_URL =
    "https://the-trivia-api.com/api/questions?categories=music&limit=10&region=US&";

  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  // const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(
        "https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=10&difficulty=easy"
      );
      const data = await response.json();
      setQuestions(data);
    }
    //   const fetchQuestions = async () => {
    //     const response = await fetch(`${TRIVIA_API_URL}difficulty=${difficulty}`);
    //     const data = await response.json();
    //     setQuestions(data.results);
    //   };

    fetchQuestions();
  }, []);

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
