// import "../css/QuestionCard.css";
import { useState } from "react";
import { Question } from "../../Models/Question";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";


interface IQuestionCardProps{
    questions: Question[];
};

export function QuestionCard(props:IQuestionCardProps) {
 


  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selected, setSelected] = useState<boolean>(false);
 

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function onSubmitAnswer(){
    if(currentQuestionIndex !== 9){
      handleNextQuestion();
      console.log(selected)
    }
    else{
      console.log("out of questions")
    }
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
        
          <input type = "radio" id = "firstAnswer" name = "radio" onChange = {selected}/>{firstAnswer.choice}
          <input type = "radio" id = "secondAnswer" name = "radio"/>{secondAnswer.choice}
          <input type = "radio" id = "thirdAnswer" name = "radio"/>{thirdAnswer.choice}
          <input type = "radio" id= "fourthAnswer" name = "radio"/>{fourthAnswer.choice}
        
        <button onClick={onSubmitAnswer}>Submit Answer</button>
        </CardBody>
      </Card>
    </div>
  );
}
