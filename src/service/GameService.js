import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/games';
export const listGames = () => axios.get(REST_API_BASE_URL);
export const gameById = (gameId) => axios.get(REST_API_BASE_URL + "/get?id=" + gameId);