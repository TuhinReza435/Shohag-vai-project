import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [movieDate, setMovieData] = useState({
    title: "",
    ott: "",
  });
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setMovieData({ ...movieDate, [key]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    //console.log(movieDate);
    if (!movieDate.title.trim() || !movieDate.ott.trim()) return;
    addMovie(movieDate);
    setMovieData({ ...movieDate, title: "", ott: "" });
  }
  return (
    <div className="p-5 bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-2 mb-8 w-full"
      >
        <input
          type="text"
          placeholder="Enter movie name..."
          name="title"
          value={movieDate.title}
          onChange={handleChange}
          className="flex-1 p-2 border border-gray-700 border-gray-800 rounded text-white"
        />
        <select
          name="ott"
          value={movieDate.ott}
          className="border border-gra-300 rounded-md bg-black"
          onChange={handleChange}
        >
          <option value="">Select an OTT</option>
          <option value="NetFilx">NetFilx</option>
          <option value="Amazon Prime">Amazon Prime</option>
          <option value="Hotstar">Hotstar</option>
          <option value="SonyLiv">SonyLiv</option>
          <option value="Hoichoi">Hoichoi</option>
          <option value="Others">Others</option>
        </select>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-white cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
