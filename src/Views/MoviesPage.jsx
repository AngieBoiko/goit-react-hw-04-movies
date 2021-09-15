import React from 'react';
import { useEffect, useState } from 'react';
import { getSearchQueryMovies } from '../Services/MoviesApi';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  function onInput(e) {
    setQuery(e.currentTarget.value.toLowerCase());
  }
  function onSubmit(e) {
    e.preventDefault();
    getSearchQueryMovies(query)
      .then(data => setMovieList(data.results))
      .catch(error => new Error());
    setQuery('');
    e.target.firstChild.value = '';
  }

  useEffect(() => {});

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onInput}></input>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {movieList &&
          movieList.map(movie => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
      </ul>
    </>
  );
}
