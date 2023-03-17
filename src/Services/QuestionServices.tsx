import axios from "axios";
import { QuestionResponse } from "../Models/QuestionModel";



export function getQuestionsEasy(category: string): Promise<QuestionResponse>  {
    return axios

    

    .get<QuestionResponse>("https://the-trivia-api.com/api/questions?&limit=10&region=US&&difficulty=easy" + category)
    .then((response) => response.data);
}

export function getQuestionsMedium(category: string): Promise<QuestionResponse>  {
    return axios

    

    .get<QuestionResponse>("https://the-trivia-api.com/api/questions?&limit=10&region=US&&difficulty=medium" + category)
    .then((response) => response.data);
}

export function getQuestionsHard(category: string): Promise<QuestionResponse>  {
    return axios

    

    .get<QuestionResponse>("https://the-trivia-api.com/api/questions?&limit=10&region=US&&difficulty=hard" + category)
    .then((response) => response.data);
}

//The above should be fine but if not working try adding a & at the end of the url. Axios should add this automatically though.

// export function getMusicQuestionsHard(): Promise<QuestionResponse>  {
//     return axios

//     .get<QuestionResponse>("https://the-trivia-api.com/api/questions?categories=music&limit=10&region=US&difficulty=hard")
//     .then((response) => response.data);
// }


