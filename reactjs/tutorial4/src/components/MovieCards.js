import React from 'react'
import {Link} from 'react-router-dom'

function MovieCards({movie,test}) {
    return (
        <li key={movie.id} id="movie1" data-toggle="modal" data-target="#moviedetail">
        <div className="movie">
          <figure className="movie__figure">
            <Link to={`/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-img"className="movie__poster"/>
          </Link>
            <figcaption><span className="movie__vote" style={{"background-color" : movie.vote_average <7 ? "orange" : "lime"}}>{movie.vote_average}</span></figcaption>
            <h2 className="movie__title">{movie.title}</h2>
          </figure>
        </div>
      </li>
    )
}

export default MovieCards