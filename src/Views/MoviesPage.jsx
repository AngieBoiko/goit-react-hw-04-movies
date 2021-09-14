import React from 'react';
import { useEffect, useState } from 'react';
import { getSearchQueryMovies } from '../Services/MoviesApi';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  function onInput(e) {
    setQuery(e.currentTarget.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    getSearchQueryMovies(query).then(
      data => console.log(data),
      //setMovieList(data.results),
    );
  }

  useEffect(() => {});

  return (
    <form>
      <input onChange={onInput}></input>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
