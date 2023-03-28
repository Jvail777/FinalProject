import {  useContext, useState } from "react";
import { Question } from "../../Models/Question";
import { addPlayer } from "../../Services/PlayerServices";
import { RegisterUser } from "./RegisterUser";
import { SetupGame } from "./SetupGame";
import { QuestionCard } from "./QuestionCard";
import { Authentication } from "./Authentication";
import AuthContext from "../../context/AuthContext";

export function Game(){
    
        const [name, setName] = useState('');
        const [questions, setQuestions] = useState<Question[]>([]);
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
        const { user } = useContext(AuthContext);

        const [score, setScore] = useState(0);
 
        function handleNextQuestion() {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }

          function setNewQuestions(questions:Question[]){
            console.log(questions);
            setQuestions([...questions]);
          }

          
          function setPlayerName(name:string){
            setName(name);
            localStorage.setItem("playerName",name);
          }

          function saveUserData(){
            const userName = localStorage.getItem("playerName");
            addPlayer({name: userName? userName: "", score});
          }

        function updateScore() {
            setScore(score +1)
            console.log(score);
        }

          

    return(
        <div className="Game">
            {<Authentication/>}
            {user!== null && questions.length===0 &&<><SetupGame SetQuestions={setNewQuestions}/> </>}
            {name!=="" && <p>{name}</p>} 
            {questions.length !== 0 && <><QuestionCard questions = {questions} updateScore={updateScore} onGameEnd={saveUserData}/></>}
            
        </div>
    )
}