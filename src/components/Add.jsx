import React, { useState } from 'react';
import axios from 'axios';
import { MovieCard } from './MovieCard';

export const Add = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const onChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc8d20428b627ceceff0ef641a994ae0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
                    .then(res => {
                        console.log(res);
                        setMovies(res['data']['results']);
                    })
    }

    return (
       <div className="add-page">
           <div className="container">
               <div className="add-content">
                   <div className="input-wrapper">
                       <input 
                       type="text"
                       placeholder="Search for a movie"
                       value={query}
                       onChange={onChange}
                       />
                   </div>
                   { movies.length > 0 && (
                       <ul className="results">
                           { movies.map((movie) => (
                               <li key={movie.id}>
                                   <MovieCard movie={movie} />
                               </li>
                           ))}
                       </ul>
                   )}
               </div>
           </div>
       </div>
    )
}

