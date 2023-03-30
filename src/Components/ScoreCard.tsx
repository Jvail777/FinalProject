import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import "../css/ScoreCard.css"
import { Question } from "../Models/Question";

interface IScoreCardProps {
  score?: number;
  difficulty?: string;
  category?: string;
}




export function ScoreCard (props: IScoreCardProps) {
  return (
    <div className="ScoreCard">
      <h2>Your Results!</h2>
      <Card className="ScoreCard-Card"> </Card>
        <CardTitle className="CardTitle">
        </CardTitle>
        <p>Category Selected:{props.category} </p>
        <p>Difficulty Selected: {props.difficulty} </p>
        <p>Your Score : {props.score}</p>
    </div>
  );
}
