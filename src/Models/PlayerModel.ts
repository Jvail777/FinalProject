

export interface PlayerModel {
    id?: string,
    name: string,
    games?: [
        {
            category: string,
            difficulty: string,
            score: number
        }
    ]
}