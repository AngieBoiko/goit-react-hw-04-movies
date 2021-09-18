import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch, Route } from 'react-router-dom';
import { getMovieDetails, KEY } from '../Services/MoviesApi';
import Cast from './Cast';
import Reviews from './Reviews';
import GoBackBtn from '../GoBackButton/GoBackBtn';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => new Error());
  }, [movieId]);

  return (
    <>
      {movie && (
        <section>
          <GoBackBtn />
          <div>
            <ul>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}?api_key=${KEY}`}
                  alt={movie.original_title}
                ></img>
              </li>
              <li>
                <h2>{movie.original_title}</h2>
                <p>User score:{movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.map(genre => (
                    <li key={genre.id}> {genre.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <Route
            path={`${path}/cast`}
            render={() => <Cast movieId={movieId} />}
          />
          <Route
            path={`${path}/reviews`}
            render={() => <Reviews movieId={movieId} />}
          />
          ;
        </section>
      )}
    </>
  );
}
