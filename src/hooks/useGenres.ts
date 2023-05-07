import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre{
    id: number;
    name:string;
}

interface FetchGenreResponse{
    count: number,
    results: Genre[]
}


const useGenres = ()=>{
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
        const controller = new AbortController();
      apiClient
        .get<FetchGenreResponse>("/genres", {signal:controller.signal})
        .then((res) => {
          setGenre(res.data.results);
          setLoading(false)
        })
        .catch((err) => {
            if(err instanceof CanceledError){
                return;
            }
            setError(err.message)

          setLoading(false)
        });

        return ()=>controller.abort()
    },[]);

    return {genres, error, isLoading}
}

export default useGenres