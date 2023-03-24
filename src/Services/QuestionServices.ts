import axios from "axios";
import { Question } from "../Models/Question";


export function GetQuestions(category:string, difficulty:string){
    return axios
    .get<Question>("https://the-trivia-api.com/api/questions", {params: {category: category, difficulty: difficulty, limit: 10, region: "US"}})
}


