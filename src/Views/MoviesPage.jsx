import React from 'react';
import { useState, useEffect } from 'react';
import { getSearchQueryMovies } from '../Services/MoviesApi';
import { useHistory, useLocation } from 'react-router';
import MovieList from '../MovieList/MovieList';
import { toast } from 'react-toastify';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const foundQuery = params.get('query');

  useEffect(() => {
    if (foundQuery) {
      getSearchQueryMovies(foundQuery)
        .then(data => {
          if (data.results.length === 0) {
            toast.error('Please, enter another movie!');
            history.push({ ...location, search: '' });
          }
          setMovieList(data.results);
        })
        .catch(error => toast.error('Please, enter another movie!'));
      setQuery('');
    }
  }, [foundQuery]);

  function onInput(e) {
    setQuery(e.currentTarget.value.toLowerCase());
  }
  function onSubmit(e) {
    e.preventDefault();
    e.target.firstChild.value = '';
    history.push({
      ...location,
      search: `query=${query}`,
    });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onInput}></input>
        <button type="submit">Search</button>
      </form>
      <MovieList movieArray={movieList} />
    </>
  );
}
