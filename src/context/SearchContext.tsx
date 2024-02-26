import { createContext, Dispatch, useState } from "react";
import { MovieType } from "../components/types";

interface State {
  search: string;
  setSearch: Dispatch<string>;
  page: number;
  setPage: Dispatch<number>;
  openDetails: boolean;
  setOpenDetails: Dispatch<boolean>;
  openMovieDetails: MovieType | null;
  setOpenMovieDetails: Dispatch<MovieType | null>;
  movies: MovieType[] | null;
  setMovies: Dispatch<MovieType | null>;
  genre: boolean;
  setGenre: Dispatch<boolean>;
}

export const SearchContextProvider = createContext<State | any>([]);

export const SearchContext = ({ children }: any) => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [openDetails, setOpenDetails] = useState(false);
  const [openMovieDetails, setOpenMovieDetails] = useState<MovieType | null>(
    null
  );
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  const [genre, setGenre] = useState("ALL");
  return (
    <SearchContextProvider.Provider
      value={[
        search,
        setSearch,
        page,
        setPage,
        openDetails,
        setOpenDetails,
        openMovieDetails,
        setOpenMovieDetails,
        movies,
        setMovies,
        genre,
        setGenre,
      ]}
    >
      {children}
    </SearchContextProvider.Provider>
  );
};
