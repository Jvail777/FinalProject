import React from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// import './css/TriviaCard.css';
// import './css/Header.css';
// import { QuestionCard } from './Components/QuestionCard';

import { Header } from './Components/Header';
import { LeaderBoard } from './Components/LeaderBoard';
import { Login } from './Components/Login';
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
<<<<<<< HEAD
=======

>>>>>>> 0e66baec631a2d76d5ab1ebb2412bbfba30143a0


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <QuestionCard question={'Who is the best grand circus staff member?'} answers={["Olaposi","Spencer","Jonathan","Bron"]} correctAnswerIndex={2} onAnswerSelected={function (isCorrect: boolean): void {
      } }/> */}

<<<<<<< HEAD
        <Footer></Footer>

=======
        <Header/>
        <Footer/>
>>>>>>> 0e66baec631a2d76d5ab1ebb2412bbfba30143a0
        <Routes>
          {/* when click on leaderboard it doesn't show new page - just adds to bottom */}
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
