import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [popular, setPopular] = useState([]);

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
      <h1 onClick={fetchPopular}>Hello</h1>
      {popular.map((item) => (<p>{item.original_title}</p>))}
    </div>
  );
}

export default App;
