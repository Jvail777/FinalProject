import {  useContext, useState } from "react";
import { Question } from "../../Models/Question";
import { addPlayer } from "../../Services/PlayerServices";
import { SetupGame } from "./SetupGame";
import { QuestionCard } from "./QuestionCard";
import AuthContext from "../../context/AuthContext";


export function Game(){
    
        // const [name, setName] = useState('');
        const [questions, setQuestions] = useState<Question[]>([]);
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
        const { user } = useContext(AuthContext);
        const [score, setScore] = useState(0);
        const [difficulty, setDifficulty] = useState("");
        const [category, setCategory] = useState("");
        const [totalScore, setTotalScore] = useState(0);
 
        function handleNextQuestion() {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }

          function setNewQuestions(questions:Question[]){
            console.log(questions);
            setQuestions([...questions]);
            setDifficulty(questions[0].difficulty)
            setCategory(questions[0].category)
          }


          function saveUserData(){
            addPlayer({name: user?.displayName? user?.displayName: "", games: [{category: category, difficulty: difficulty, score: score}] })
            
          }

        function updateScore() {
            setScore(score +1)
            console.log(score);
        }

          console.log(user?.displayName)
          

    return(
        <div className="Game">
            {user!== null && questions.length===0 &&<><SetupGame SetQuestions={setNewQuestions}/> </>}
            {questions.length !== 0 && <><QuestionCard questions = {questions} updateScore={updateScore} onGameEnd={saveUserData}/></>}
            
        </div>
    )
}