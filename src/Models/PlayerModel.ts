import { Game } from "./Game";


export interface PlayerModel {
    googleId?: string,
    name: string,
    totalScore?: number,
    games?: Game[]
}