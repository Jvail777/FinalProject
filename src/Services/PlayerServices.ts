import axios from "axios";
import { Game } from "../Models/Game";
import { PlayerModel } from "../Models/PlayerModel";

const baseUrl = "https://us-central1-finalproject-5656a.cloudfunctions.net/api";

export function addPlayer(player: PlayerModel): Promise<PlayerModel> {
  return axios
    .post<PlayerModel>(`${baseUrl}/player`, player)
    .then((res) => res.data);
}

export async function getPlayerData(): Promise<PlayerModel[]> {
  const response = await axios.get<PlayerModel[]>(`${baseUrl}/player`);
  return response.data;
}

export function updatePlayer(
  player: PlayerModel,
  game: Game
): Promise<PlayerModel> {
  return axios
    .put<PlayerModel>(
      `${baseUrl}/player/${player.googleId}/${player.name}`,
      game
    )
    .then((res) => res.data);
}
