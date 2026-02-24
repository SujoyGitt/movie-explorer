import "./App.css";
import Home from "./page/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MovieDetails from "./page/MovieDetails";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
