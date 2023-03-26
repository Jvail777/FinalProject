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
  const [toggleSelected, setToggleSelected] = useState<boolean>(false);
 

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function onSubmit(){
    if(currentQuestionIndex !== 9){
      handleNextQuestion();
    }
    else{
      
    }
  }

  //onClick = {() => setToggleSelected(!toggleSelected)}
  
  let firstAnswer = props.questions[currentQuestionIndex].questionChoices[0]
  let secondAnswer = props.questions[currentQuestionIndex].questionChoices[1]
  let thirdAnswer = props.questions[currentQuestionIndex].questionChoices[2]
  let fourthAnswer = props.questions[currentQuestionIndex].questionChoices[3]
  
  return (
    <div className="QuestionCard">
      <form>
      <h2>Trivia Question:</h2>
      <Card className="QuestionCard">
        <CardBody>
        <CardTitle>{props.questions[currentQuestionIndex].question}</CardTitle>
        
          <input type = "radio" onChange = {() => setToggleSelected(!toggleSelected)}/>{firstAnswer.choice}
          <input type = "radio"/>{secondAnswer.choice}
          <input type = "radio"/>{thirdAnswer.choice}
          <input type = "radio"/>{fourthAnswer.choice}
        
        <button onClick={handleNextQuestion}>Submit Answer</button>
        </CardBody>
      </Card>
      </form>
    </div>
  );
}
