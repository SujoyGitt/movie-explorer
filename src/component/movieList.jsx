import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./movieCard";

const MovieList = () => {
  const { state } = useContext(MovieContext);
  const { loading, err, movieList } = state;

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 min-h-[60vh]">
      {loading && (
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid"></div>
        </div>
      )}

      {err && !loading && (
        <div className="flex justify-center items-center h-60">
          <div className="bg-red-500/10 text-red-400 px-6 py-4 rounded-lg text-center">
            <p className="text-lg font-semibold">Something went wrong</p>
            <p className="text-sm mt-1">{err}</p>
          </div>
        </div>
      )}

      {!loading && !err && state?.movieList?.length > 0 && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movieList.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

      {!loading && !err && state?.movieList?.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-lg">No movies found 🎬</p>
        </div>
      )}
    </main>
  );
};

export default MovieList;
