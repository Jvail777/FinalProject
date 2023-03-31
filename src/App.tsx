import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
// import './css/TriviaCard.css';
// import './css/Header.css';


import { Header } from './Components/Header';
import {Leaderboard} from './Components/LeaderBoard';

import { Footer } from "./Components/Footer";
import { Game } from "./Components/New Components/Game";
import { GetQuestions } from "./Services/QuestionServices";
import { SetupGame } from "./Components/New Components/SetupGame";

import AuthContextProvider from "./context/AuthContextProvider";

import { ScoreCard } from "./Components/ScoreCard";
import { useState } from "react";



interface GameInfo{
  difficulty: string;
  category: string;
  score: number;
}


function App() {

let [gameInfo, setGameInfo] = useState<GameInfo>();

  function GoToScoreCard(Info:GameInfo){
    setGameInfo(Info)
  }



  return (
    <BrowserRouter>
      <div className="App">
     
        <AuthContextProvider >
        <Header/>
        <Routes>
          <Route path="/" element={<Game GoToScoreCard={GoToScoreCard}/>}/>
          <Route path="/LeaderBoard" element={<Leaderboard />} />
          <Route path='/ScoreCard' element={<ScoreCard  difficulty={gameInfo?.difficulty} category={gameInfo?.category} score={gameInfo?.score}/>} />
        </Routes>
        <Footer/>
        </AuthContextProvider>
        
      </div>

    </BrowserRouter>
  );
}

export default App;
