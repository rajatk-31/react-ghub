import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return { data: genre, isLoading: false, error: null }; //useData<Genre>('/genres')
};

export default useGenres;
