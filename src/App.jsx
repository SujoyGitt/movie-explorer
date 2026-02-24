import "./App.css";
import Home from "./page/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./page/MovieDetails";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
          </Routes>
        </HashRouter>
      </MovieProvider>
    </>
  );
}

export default App;
