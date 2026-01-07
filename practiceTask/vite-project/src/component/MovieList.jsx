import React from "react";
import MovieItem from "./movieItem"; // নিশ্চিত করুন ফাইলের নাম ছোট হাতের 'm' কি না

const MovieList = ({ movies, rateMovies, toggleWatched, deleteMovies }) => {
  return (
    <div className="w-full">
      <ul className="mt-4">
        {/* ১. কার্লি ব্র্যাকেট শুরু */}
        {movies.length === 0 ? (
          <p className="text-center text-gray-500">Please enter a movie item</p>
        ) : (
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              rateMovies={rateMovies}
              toggleWatched={toggleWatched}
              deleteMovies={deleteMovies}
            /> // ২. এখানে কোনো সেমিকোলন হবে না
          ))
        )}
        {/* ৩. কার্লি ব্র্যাকেট শেষ */}
      </ul>
    </div>
  );
};

export default MovieList;
