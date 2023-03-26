import {  useState } from "react";
import { Question } from "../../Models/Question";
import { addPlayer } from "../../Services/PlayerServices";
import { RegisterUser } from "./RegisterUser";
import { SetupGame } from "./SetupGame";
import { QuestionCard } from "./QuestionCard";


export function Game(){
    
        const [name, setName] = useState('');
        const [questions, setQuestions] = useState<Question[]>([]);
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

        const [score, setScore] = useState(0);
 
        function handleNextQuestion() {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }

          function setNewQuestions(questions:Question[]){
            console.log(questions);
            setQuestions([...questions]);
          }

          
          function setPlayerName(name:string){
            const testplayer = addPlayer({name, score});
            console.log(testplayer);
            console.log(name)
          }

          

    return(
        <div className="Game">
            {/* {name==="" && <><RegisterUser setName={setPlayerName}/></>} */}
            {name==="" && questions.length===0 &&<><RegisterUser setName={setPlayerName}/><SetupGame SetQuestions={setNewQuestions}/></>}
            {/* {name!=="" && <p>{name}</p>}  */}
            {questions.length !== 0 && <><QuestionCard questions = {questions}/></>}
            
        </div>
    )
}