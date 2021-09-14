import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../Services/MoviesApi';

export default function TrendingMovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setMovies(response.results);
      })
      .catch(err => new Error());
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to="/movies/">{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
