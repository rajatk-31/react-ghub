import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = (gameQuery: GameQuery) => {
  //(selectedGenre: Genre | null ,selectedPlatform: Platform|null) =>{
  return useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  ); // [gameQuery.genre?.id,gameQuery.platform?.id])
};

export default useGames;
