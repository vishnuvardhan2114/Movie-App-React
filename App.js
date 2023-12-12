import {useEffect, useState} from "react";

import MovieCart from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=507b0082';

const movie1 ={
    
        "Title": "Lauf um Dein Leben - Vom Junkie zum Ironman",
        "Year": "2008",
        "imdbID": "tt0954542",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDJhZjA5MWEtOTE5Yy00MWJiLTgwNjQtMDliOWI0NWJmZDZkXkEyXkFqcGdeQXVyMjY1ODY2Ng@@._V1_SX300.jpg"
    
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTeam] = useState('');
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }

    useEffect(() => {
        searchMovies('Ironman');

    },[]);

    return(
       <div className="app">
         <h1>CiniWorld</h1>

       <div className="search">
        <input 
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTeam(e.target.value)}        
        />
        <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
        />
       </div>

       {
         movies?.length > 0
            ? (
            <div className="container">
                    {movies.map((movie) => (
                       <MovieCart movie={movie} /> 
                    ))}
             </div>
                ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>

                 )
        }
       </div>
    );
}

export default App;