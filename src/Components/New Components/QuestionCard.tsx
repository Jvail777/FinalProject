import { useState } from "react";
import { Question } from "../../Models/Question";
import { Card, CardTitle, Progress } from "reactstrap";

import { useNavigate } from 'react-router-dom'


interface IQuestionCardProps {
  questions: Question[];
  updateScore: Function;
  onGameEnd: Function;
}

export function QuestionCard(props: IQuestionCardProps) {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [progressBar, setProgressBar] = useState<number>(1);

  const [answerSelected, setAnswerSelected] = useState(false);

  const navigate = useNavigate();

  function handleAnswerClick(answer: any) {

    setAnswerSelected(true);
  }

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function onSubmitAnswer() {
    if (currentQuestionIndex === 9) {
      setProgressBar(progressBar + 1);
      checkAnswer();
      props.onGameEnd();
      navigate('/ScoreCard');
    } else if (currentQuestionIndex !== 9) {
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
          <Progress animated striped color="warning" max={10} value={progressBar}></Progress>
          {props.questions[currentQuestionIndex].question}
        </CardTitle>
        <label>
          <input
            type="radio"
            name="radio"
            value={firstAnswer.choice}
            onChange={(e) => setAnswer(e.target.value)}
            onClick={() => handleAnswerClick(firstAnswer)}
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
            onClick={() => handleAnswerClick(secondAnswer)}
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