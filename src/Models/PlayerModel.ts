import { Game } from "./Game";


export interface PlayerModel {
    googleId?: string,
    name: string,
    games?: Game[]
}


