import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./Components/MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=9826e371';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchState, setSearchState] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('batman');
  }, []);


  return(
    <div className="App">

      <h1>Movie Search App</h1>

      <div className="search">
        <input
            placeholder={'Search for a movie...'}
            value={searchState}
            onChange={(event) => {
              setSearchState(event.target.value);
            }}
            onKeyPress={(event) => {
                if (event.key === 'Enter') {
                searchMovies(searchState);
              }
            }}
        />
        <img
            src={SearchIcon}
            alt={'search'}
            onClick={() => {
              searchMovies(searchState);
            }}
        />
      </div>

      {
        movies?.length > 0 ? (
            <div className={'container'}>
              {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
              ))}

            </div>
        ) : (
            <div className={'empty'}>
                <h2>No movies found</h2>
            </div>
        )
      }

    </div>
  );
}

export default App;
