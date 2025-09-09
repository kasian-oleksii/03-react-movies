import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const myKey = import.meta.env.VITE_API_KEY;

  const response = await axios.get<FetchMoviesResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: { query, page: 1 },
      headers: {
        Authorization: `Bearer ${myKey}`,
        accept: "application/json",
      },
    }
  );

  return response.data.results;
};
