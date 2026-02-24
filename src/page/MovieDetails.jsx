import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  console.log(movie);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=27633acc&i=${id}`,
        );
        setMovie(response.data);
      } catch (error) {
        console.error(error);
        setErr(error);
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (err) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-red-500">
        {err.message || "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl shadow-lg overflow-hidden md:flex">
        {/* Poster if exists */}
        {movie.Poster && (
          <div className="md:w-1/3">
            <img
              src={movie.Poster}
              alt={movie.Title || "Movie Poster"}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8 md:w-2/3 space-y-4">
          {/* Title */}
          {movie.Title && (
            <h1 className="text-3xl font-bold">
              {movie.Title} {movie.Year && `(${movie.Year})`}
            </h1>
          )}

          {/* Genres */}
          {movie.Genre && (
            <div className="flex flex-wrap gap-3">
              {movie.Genre.split(", ").map((g, index) => (
                <span
                  key={index}
                  className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-sm"
                >
                  {g}
                </span>
              ))}
            </div>
          )}

          {/* IMDb Rating */}
          {movie.imdbRating && (
            <p className="text-yellow-400 text-lg font-semibold">
              ⭐ IMDb Rating: {movie.imdbRating}
            </p>
          )}

          {/* Plot */}
          {movie.Plot && <p className="text-gray-300">{movie.Plot}</p>}

          {/* Display all other fields dynamically */}
          <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-gray-400">
            {Object.entries(movie).map(([key, value]) => {
              // Skip already rendered fields
              const skipKeys = [
                "Title",
                "Year",
                "Genre",
                "Poster",
                "imdbRating",
                "Plot",
              ];
              if (skipKeys.includes(key)) return null;

              // Convert key to readable format (e.g., imdbVotes → IMDb Votes)
              const readableKey = key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());

              // Handle array values (like Ratings)
              const displayValue = Array.isArray(value)
                ? value.join(", ")
                : value;

              return (
                <p key={key}>
                  <span className="text-white font-semibold">
                    {readableKey}:
                  </span>
                  {displayValue}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
