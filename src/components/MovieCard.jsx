import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieCard = ({movie}) => {
    const { addMovieToWatchlist, addMovieToWatched,  watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find(item => item.id === movie.id);
    let storedMovieWatched = watched.find(item => item.id === movie.id);
    const addBtnDisabled = storedMovie ? true : storedMovieWatched ? true : false;
    const addToWatchedBtnDisabled = storedMovieWatched ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                { movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}/>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4): `-`}
                    </h4>
                </div>
                <div className="controls">
                    <button className="btn" disabled={addBtnDisabled} onClick={() => addMovieToWatchlist(movie)}>Add To Watchlist</button>
                    <button className="btn" disabled={addToWatchedBtnDisabled} onClick={() => addMovieToWatched(movie)}>Add To Watched</button>
                </div>
            </div>
        </div>
    )
}
