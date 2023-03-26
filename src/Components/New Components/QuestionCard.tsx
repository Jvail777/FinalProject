import { useState } from "react";
import { Question } from "../../Models/Question";
import { Card, CardBody, CardTitle } from "reactstrap";
import "../../css/QuestionCard.css";


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
      console.log("out of questions")
    }
  }

  //onClick = {() => setToggleSelected(!toggleSelected)}
  
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
        
          <input type = "radio" id = "firstAnswer" name="radio-button"/>{firstAnswer.choice}
          <input type = "radio" id = "secondAnswer" name="radio-button"/>{secondAnswer.choice}
          <input type = "radio" id = "thirdAnswer" name="radio-button" />{thirdAnswer.choice}
          <input type = "radio" id= "fourthAnswer" name="radio-button"/>{fourthAnswer.choice}
        
        <button onClick={onSubmit}>Submit Answer</button>
        </CardBody>
      </Card>
     
    </div>
  );
}
