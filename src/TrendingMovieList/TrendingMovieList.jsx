import React, { useState, useEffect } from 'react';
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

  console.log(movies);
  return (
    <section>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => {
          return <li key={movie.id}>{movie.original_title}</li>;
        })}
      </ul>
    </section>
  );
}
