import React, { useState, useEffect } from 'react';
import { getMovieCredits } from '../Services/MoviesApi';
import { KEY } from '../Services/MoviesApi';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => setCast(response.cast))
      .catch(error => new Error());
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.profile_path}?api_key=${KEY}`}
                  alt={item.name}
                ></img>
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
