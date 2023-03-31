import { useState } from "react";
import { Question } from "../../Models/Question";
import { Card, CardTitle, Progress } from "reactstrap";
import "../../css/QuestionCard.css";
import { useNavigate } from 'react-router-dom'
import { ScoreCard } from "../ScoreCard";
import { delay } from "q";
import { isDisabled } from "@testing-library/user-event/dist/utils";

interface IQuestionCardProps {
  questions: Question[];
  updateScore: Function;
  onGameEnd: Function;
}

export function QuestionCard(props: IQuestionCardProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [progressBar, setProgressBar] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleAnswerClick(answer:any){
    setSelectedAnswer(answer);
    setAnswerSelected(true);
  }

  const navigate = useNavigate();

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }


  function onSubmitAnswer() {
    if(currentQuestionIndex === 9){
      setProgressBar(progressBar + 1);
      checkAnswer();
      props.onGameEnd();
      navigate('/ScoreCard');
    }
    else if (currentQuestionIndex !== 9) {
      checkAnswer();
      handleNextQuestion();
      setProgressBar(progressBar + 1)
    } else {
      console.log("out of questions");
    }
    setAnswer("");
    setAnswerSelected(false);
  }

  function checkAnswer() {
    if (answer === props.questions[currentQuestionIndex].correctAnswer) {
      props.updateScore();
    } else {
    }
  }

  let firstAnswer = props.questions[currentQuestionIndex].questionChoices[0];
  let secondAnswer = props.questions[currentQuestionIndex].questionChoices[1];
  let thirdAnswer = props.questions[currentQuestionIndex].questionChoices[2];
  let fourthAnswer = props.questions[currentQuestionIndex].questionChoices[3];

  return (
    <div className="QuestionCard-Container">
      <h2>Trivia Question:</h2>
      <Card className="QuestionCard-Card">
        <CardTitle className="CardTitle">
        <Progress animated striped color="warning" max = {10} value= {progressBar} ></Progress>
          {props.questions[currentQuestionIndex].question}
        </CardTitle>
          <label>
            <input
              type="radio"
              name="radio"
              value={firstAnswer.choice}
              onChange={(e) => setAnswer(e.target.value)}
              onClick={() => handleAnswerClick(answer)}
              checked={answer === firstAnswer.choice}
            />
            {firstAnswer.choice}
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value={secondAnswer.choice}
              onChange={(e) => setAnswer(e.target.value)}
              onClick={() => handleAnswerClick(answer)}
              checked={answer === secondAnswer.choice}
            />
            {secondAnswer.choice}
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value={thirdAnswer.choice}
              onChange={(e) => setAnswer(e.target.value)}
              onClick={() => handleAnswerClick(answer)}
              checked={answer === thirdAnswer.choice}
            />
            {thirdAnswer.choice}
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value={fourthAnswer.choice}
              onChange={(e) => setAnswer(e.target.value)}
              onClick={() => handleAnswerClick(answer)}
              checked={answer === fourthAnswer.choice}
            />
            {fourthAnswer.choice}
          </label>
          <button disabled={!answerSelected} onClick= {onSubmitAnswer}>Submit Answer</button>
      </Card>
    </div>
  );
}
