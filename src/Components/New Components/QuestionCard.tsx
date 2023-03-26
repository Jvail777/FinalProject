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
  const [answer, setAnswer] = useState<string>("");
 

  function handleNextQuestion() {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  

  function onSubmitAnswer(){
    if(currentQuestionIndex !== 9){
      checkAnswer();
      handleNextQuestion();
      
    }
    else{
      console.log("out of questions")
    }
  }

  function checkAnswer(){
    if(answer === props.questions[currentQuestionIndex].correctAnswer){
      alert("correct answer")
    }
    else{alert("incorrect answer")}
  }
  
  
  let firstAnswer = props.questions[currentQuestionIndex].questionChoices[0]
  let secondAnswer = props.questions[currentQuestionIndex].questionChoices[1]
  let thirdAnswer = props.questions[currentQuestionIndex].questionChoices[2]
  let fourthAnswer = props.questions[currentQuestionIndex].questionChoices[3]
  
  return (
    <div className="QuestionCard">
      <h2>Trivia Question:</h2>
      <Card className="QuestionCard">
      <CardTitle className="CardTitle">{props.questions[currentQuestionIndex].question}</CardTitle>
<label>
  <input type="radio" name="radio" value={firstAnswer.choice} onChange={e => setAnswer(e.target.value)} />
  {firstAnswer.choice}
</label>
<label>
  <input type="radio" name="radio" value={secondAnswer.choice} onChange={e => setAnswer(e.target.value)} />
  {secondAnswer.choice}
</label>
<label>
  <input type="radio" name="radio" value={thirdAnswer.choice} onChange={e => setAnswer(e.target.value)} />
  {thirdAnswer.choice}
</label>
<label>
  <input type="radio" name="radio" value={fourthAnswer.choice} onChange={e => setAnswer(e.target.value)} />
  {fourthAnswer.choice}
</label>
<button onClick={onSubmitAnswer}>Submit Answer</button>
      </Card>
    </div>
  );
}
