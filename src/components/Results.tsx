import { Box, Grid } from "@material-ui/core";
import axios from "axios";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { SearchContextProvider } from "../context/SearchContext";
import { filter } from "../helpers/filter";
import { genreNumbers } from "../helpers/GenreDecode";
import { Movie } from "./Movie";
import { MovieDetail } from "./MovieDetail";
import { MovieType } from "./types";

export const Results = () => {
  const [fetch, setFetch] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [
    search,
    ,
    page,
    setPage,
    ,
    setOpenDetails,
    openMovieDetails,
    setOpenMovieDetails,
    movies,
    setMovies,
    genre,
  ] = useContext(SearchContextProvider);

  const { data, refetch } = useQuery<any, any>(
    [search === "" ? `trending` : `${search}:${page}`],
    async () => {
      try {
        setFetch(true);
        const data = await axios.get(
          search === ""
            ? `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=${page}`
            : `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${search}&page=${page}&include_adult=false`
        );
        setFetch(false);
        return data.data;
      } catch (error: any) {
        setFetch(false);
        if (axios.isCancel(error)) return;
        console.log(error?.message);
      }
    },
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const observer = useRef<any>(null);
  const lastPoster = useCallback(
    (node) => {
      if (fetch) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((enteries) => {
        if (enteries[0].isIntersecting && hasMore)
          setPage((page: number) => page + 1);
      });
      if (node) observer.current.observe(node);
    },
    [fetch, setPage, hasMore]
  );

  const handlePosterClick = (movie: MovieType) => {
    setOpenMovieDetails(movie);
    setOpenDetails(true);
  };

  const getLastID = (movies: MovieType[], genre: string) => {
    if (!movies || movies.length < 0) return;
    if (genre === "ALL") return movies[movies.length - 1].id;
    let lastId = movies[0].id;
    movies.forEach((movie: MovieType) => {
      if (movie.genre_ids.includes(genreNumbers[`${genre}`])) lastId = movie.id;
    });
    return lastId;
  };

  useEffect(() => {
    refetch();
  }, [page, refetch, search]);

  useEffect(() => {
    if (!data) return;
    setHasMore(data.results.length > 0);
    setMovies((movies: MovieType[]) =>
      movies !== null ? filter(movies, data.results) : data.results
    );
    return () => {};
  }, [data, setMovies]);

  return (
    <Box
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="10px"
    >
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        {movies?.map((movie: MovieType, idx: number) => {
          if (
            genreNumbers[`${genre}`] === 1 ||
            movie.genre_ids.includes(genreNumbers[`${genre}`])
          ) {
            const lastId = getLastID(movies, genre);
            return (
              movie.poster_path &&
              (lastId === movie.id ? (
                <Grid
                  item
                  key={`${movie.id}:${idx}`}
                  onClick={() => handlePosterClick(movie)}
                  ref={lastPoster}
                >
                  <Movie id={movie.id} posterPath={movie.poster_path} />
                </Grid>
              ) : (
                <Grid
                  item
                  key={`${movie.id}:${idx}`}
                  onClick={() => handlePosterClick(movie)}
                >
                  <Movie id={movie.id} posterPath={movie.poster_path} />
                </Grid>
              ))
            );
          }
          return [];
        })}
      </Grid>
      {openMovieDetails && <MovieDetail movie={openMovieDetails} />}
    </Box>
  );
};
