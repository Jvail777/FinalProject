import './css/TriviaCard.css';
import './css/Header.css';
import {Routes, Route, Navigate, BrowserRouter, useParams} from 'react-router-dom';
// import { QuestionCard } from './Components/QuestionCard';
import { Header } from './Components/Header';
import { LeaderBoard } from './Components/LeaderBoard';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
{/* <QuestionCard question={'Who is the best grand circus staff member?'} answers={["Olaposi","Spencer","Jonathan","Bron"]} correctAnswerIndex={2} onAnswerSelected={function (isCorrect: boolean): void {
      } }/> */}
      <Header />
      <Routes>
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
