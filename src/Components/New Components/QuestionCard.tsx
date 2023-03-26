// import "../css/QuestionCard.css";
import { useState } from "react";
import { Question } from "../../Models/Question";
import { Card, CardBody, CardTitle } from "reactstrap";


interface IQuestionCardProps{
    questions: Question[];
};

export function QuestionCard(props:IQuestionCardProps) {
 


  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

 

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  
  let firstAnswer = props.questions[currentQuestionIndex].questionChoices[0]
  let secondAnswer = props.questions[currentQuestionIndex].questionChoices[1]
  let thirdAnswer = props.questions[currentQuestionIndex].questionChoices[2]
  let fourthAnswer = props.questions[currentQuestionIndex].questionChoices[3]
  
  return (
    <div className="QuestionCard">
      <h2>Trivia Question:</h2>
      <Card className="QuestionCard">
        <CardBody>
        <CardTitle>{props.questions[currentQuestionIndex].question}</CardTitle>
        <div>
          <button>{firstAnswer.choice}</button>
          <button>{secondAnswer.choice}</button>
          <button>{thirdAnswer.choice}</button>
          <button>{fourthAnswer.choice}</button>
        </div>
        <button onClick={handleNextQuestion}>Next Question</button>
        </CardBody>
      </Card>
    </div>
  );
}
