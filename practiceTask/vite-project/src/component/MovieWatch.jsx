import React from "react";
import MovieForm from "./MovieForm";
import Filter from "./Filter";
import MovieList from "./MovieList";
import Heading from "./Heading";
const MovieWatch = () => {
  return (
    <div>
      <Heading />
      <MovieForm />
      <Filter />
      <MovieList />
    </div>
  );
};

export default MovieWatch;
