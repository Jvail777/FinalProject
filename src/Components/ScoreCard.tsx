import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import "../css/ScoreCard.css"

// interface IScoreCardProps {
  
// }

export function ScoreCard () {
  return (
    <div className="ScoreCard">
      <h2>Your Results!</h2>
      <Card className="ScoreCard-Card"> </Card>
        <CardTitle className="CardTitle">
        </CardTitle>
        <p>Category Selected: {}</p>
        <p>Difficulty Selected: {}</p>
        <p>Your Score : *Insert Score Here*</p>
    </div>
  );
}
