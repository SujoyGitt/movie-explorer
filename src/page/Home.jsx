import React from "react";
import MovieList from "../component/movieList";
import Navbar from "../component/Navbar";

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <Navbar/>      

      {/* Movies Grid */}
      <MovieList/>
    </div>
  );
};

export default Home;
