import React, { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import { getTrendingMovies } from '../Services/MoviesApi';
import { toast } from 'react-toastify';

export default function TrendingMovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setMovies(response.results);
      })
      .catch(err => toast.error('Something go wrong'));
  }, []);

  return (
    <section>
      <h2>Trending today</h2>
      <MovieList movieArray={movies} />
    </section>
  );
}
