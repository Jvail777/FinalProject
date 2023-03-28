import { QuestionChoice } from "./QuestionChoice"

export interface Question {
    question: string,
    correctAnswer: string,
    incorrectAnswers: string[],
    difficulty: string,
    questionChoices: QuestionChoice[]
    category: string
}