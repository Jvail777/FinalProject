import { Card,  CardTitle,  } from "reactstrap";



interface IScoreCardProps {
  score?: number;
  difficulty?: string;
  category?: string;
}

export function ScoreCard(props: IScoreCardProps) {
  return (
    <div className="ScoreCard">
      <h2>Your Results!</h2>
      <Card className="ScoreCard-Card"> </Card>
      <CardTitle className="CardTitle"></CardTitle>
      <h5>Category Selected:</h5> <p>{props.category}</p>
      <h5>Difficulty Selected:</h5> <p>{props.difficulty}</p>
      <h5>Your Score: </h5> <p>{props.score}</p>
    </div>
  );
}
