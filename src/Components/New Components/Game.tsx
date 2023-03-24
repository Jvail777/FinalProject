import {  useState } from "react";
import { Question } from "../../Models/Question";
import { RegisterUser } from "./RegisterUser";
import { SetupGame } from "./SetupGame";


export function Game(){
    
        const [name, setName] = useState('');
        const [questions, setQuestions] = useState<Question[]>([]);
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
 
        function handleNextQuestion() {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }

          function setNewQuestions(questions:Question[]){
            console.log(questions);
            setQuestions([...questions]);
          }

    return(
        <div className="Game">
            {name==="" && <><RegisterUser SetName={setName}/></>}
            {name!=="" && questions.length===0 &&<><SetupGame SetQuestions={setNewQuestions}/></>}
            {name!=="" && <p>{name}</p>} 
            
        </div>
    )
}