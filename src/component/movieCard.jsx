import React from "react";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition duration-300 hover:scale-105">
      
      {/* Poster */}
      <div className="relative">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="w-full h-80 object-cover"
        />

        {/* Type Badge */}
        <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
          {movie.Type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-white">
          {movie.Title}
        </h2>

        <p className="text-gray-400 text-sm">
          Year: {movie.Year}
        </p>

        <p className="text-gray-400 text-sm">  IMDb ID: {movie.imdbID} </p>

        <NavLink to={`/moviedetails/${movie.imdbID}`} className="w-full inline-block text-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 mt-4 rounded-lg transition">View Details</NavLink>
      </div>
    </div>
  );
};

export default MovieCard;