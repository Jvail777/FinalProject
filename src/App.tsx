import React from "react";
import logo from "./logo.svg";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
// import './css/TriviaCard.css';
// import './css/Header.css';


import { Header } from './Components/Header';
import { LeaderBoard } from './Components/LeaderBoard';

import { Footer } from "./Components/Footer";
import { Game } from "./Components/New Components/Game";
import { GetQuestions } from "./Services/QuestionServices";





function App() {
  return (
    <BrowserRouter>
      <div className="App">
     

        <Header/>
        <Routes>
          <Route path="/LeaderBoard" element={<LeaderBoard />} />
          <Route path="/Game" element={<Game/>}/>
        </Routes>
        <Footer/>
      </div>

    </BrowserRouter>
  );
}

export default App;
