import { Question } from "../Models/Question";

export function AddQuestionChoices(question: Question) {
  question.questionChoices = [];
  question.questionChoices.push({
    choice: question.correctAnswer,
    isCorrect: true,
  });
  for (let incorrect of question.incorrectAnswers) {
    question.questionChoices.push({ choice: incorrect, isCorrect: false });
  }
  question.questionChoices.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return question;
}
