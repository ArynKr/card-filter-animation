import './App.css';
import { useState, useEffect } from "react";
import MovieCard from './components/MovieCard';
import Filter from './components/Filter';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  // Run fetchPopular method for the very first render
  useEffect(() => {
    fetchPopular();
  }, [])

  // Fetch Popular Movies
  const fetchPopular = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`);
    const data = await res.json();
    setPopular(data.results);
  }

  return (
    <div className="App">
    <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div className="popular-movies">
        <AnimatePresence>
        {filtered.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
