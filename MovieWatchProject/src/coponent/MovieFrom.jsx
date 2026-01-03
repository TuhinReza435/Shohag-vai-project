import React, { useState } from 'react';

const MovieFrom = () => {
    const [movieData,setMovieData]=useState({
        title:'',
        ott:''
    })
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter movie name ..."
            name="title"
            value={movieData.title}
            className="flex -1 p-2 border border-gray-700 bg-gray-800 rounded text-white"
          />

          <select name="ott" value={movieData.ott} className="border border-gray-300 rounded-md">
            <option value="">Select an OTT</option>
            <option value="NetFilx">Select an OTT</option>
            <option value="Amazon prime">Select an OTT</option>
            <option value="Hotstar">Select an OTT</option>
            <option value="SonyLive">Select an OTT</option>
            <option value="Hoichoi">Select an OTT</option>
            <option value="Others">Select an OTT</option>
          </select>
        </form>
      </div>
    );
};

export default MovieFrom;