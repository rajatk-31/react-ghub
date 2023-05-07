import useData from "./useData";


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
    parent_platforms: {platform: Platform}[];
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Games[];
  } 

const useGames = () =>{
  return useData<Games>("/games")

}


export default useGames