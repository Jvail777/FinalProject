import axios from "axios";
import { Question } from "../Models/Question";


export function GetQuestions(categories:string, difficulty:string){
    return axios
    .get<Question[]>("https://the-trivia-api.com/api/questions", {params: {categories: categories, difficulty: difficulty, limit: 10, region: "US"}})
}


