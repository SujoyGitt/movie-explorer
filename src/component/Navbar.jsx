import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

const Navbar = () => {
  const { searchMovieList, state, dispatch } = useContext(MovieContext);
  const [query, setQuery] = useState("");

  function handleChange(params) {
    setQuery(params.target.value);
  }
  function handleSearch() {
    searchMovieList(query);
    setQuery("");
  }

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-500">
          🎬 Movie Explorer
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            name="query"
            value={query}
            onChange={handleChange}
            placeholder="Search for a movie..."
            className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
