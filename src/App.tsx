import React from 'react';
import logo from './logo.svg';
import './css/TriviaCard.css';
import './css/Header.css';
// import { QuestionCard } from './Components/QuestionCard';
import { Header } from './Components/Header';
import { Home } from './Components/Home';




function App() {
  return (
    <div className="App">
{/* <QuestionCard question={'Who is the best grand circus staff member?'} answers={["Olaposi","Spencer","Jonathan","Bron"]} correctAnswerIndex={2} onAnswerSelected={function (isCorrect: boolean): void {
      } }/> */}
      {/* <Header/> */}
      <Home/>
    </div>
  );
}

export default App;
