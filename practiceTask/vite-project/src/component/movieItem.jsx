const MovieItem = ({ movie, rateMovies, toggleWatched, deleteMovies }) => {
  return (
    <li className="flex justify-between items-center p-3 bg-gray-800 rounded-lg mb-2 gap-3">
      <span className="flex-1">{movie.title}</span>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => rateMovies(movie.id, star)}
            className="text-2xl transition-colors"
            style={{
              color: star <= (movie.rating || 0) ? "#ffd700" : "#6b7280",
            }}
          >
            ★
          </button>
        ))}
      </div>

      <button
        onClick={() => toggleWatched(movie.id)}
        className="px-3 py-1 bg-green-600 rounded text-sm"
      >
       {movie.watched ? "Unwatched" : "Wactcher"}
      </button>
      <button
        onClick={() => deleteMovies(movie.id)}
        className="px-3 py-1 bg-red-600 rounded text-sm"
      >
        Delete
      </button>
    </li>
  );
};

export default MovieItem;
