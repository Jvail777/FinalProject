import axios from "axios";
import { PlayerModel } from "../Models/PlayerModel";

const baseUrl = "https://us-central1-finalproject-5656a.cloudfunctions.net/api"

export function addPlayer(player:PlayerModel):Promise<PlayerModel>{
    return axios.post<PlayerModel>(`${baseUrl}`, player).then(res => res.data);
}

export function getLeaderboard(difficulty:string):Promise<PlayerModel[]>{
    return axios.get<PlayerModel[]>(`${baseUrl}/leaderboard`, {params: {difficulty}})
    .then(res => (res.data))
    
}




