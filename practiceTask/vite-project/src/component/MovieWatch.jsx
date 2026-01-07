import React, { useState } from "react";
import MovieForm from "./MovieForm";
import Filter from "./Filter";
import MovieList from "./MovieList";
import Heading from "./Heading";
const MovieWatch = () => {
  const [movies, setMovies] = useState([]);
  const addMovie = ({ title, ott }) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title: title,
      ott: ott,
      rating: 0,
      watched: false,
    };
    setMovies([...movies, newMovie]);
    console.log("New Movie added:", newMovie);
  };
  const rateMovies = (id, rating) => {
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, rating } : movie))
    );
  };
  const toggleWatched = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };
  const deleteMovies = (id) => {};
  return (
    <div className="flex flex-col v-1/2 m-3 items-center justify-center p-6 bg-slate-900 text-white rounded-lg shadow-lg">
      <Heading />
      <MovieForm addMovie={addMovie} />
      <Filter />
      <MovieList
        movies={movies}
        rateMovies={rateMovies}
        toggleWatched={toggleWatched}
        deleteMovies={deleteMovies}
      />
    </div>
  );
};

export default MovieWatch;
