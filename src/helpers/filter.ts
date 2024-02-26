import { MovieType } from "../components/types";

export const filter = (movies: MovieType[], newMovies: MovieType[]) => {
  const map: any = {};
  movies.forEach((movie: MovieType) => {
    if (!map[`${movie.id}`]) map[`${movie.id}`] = movie.id;
  });
  newMovies.forEach((movie: MovieType) => {
    if (!map[`${movie.id}`]) {
      movies.push(movie);
      map[`${movie.id}`] = movie.id;
    }
  });
  return movies;
};
