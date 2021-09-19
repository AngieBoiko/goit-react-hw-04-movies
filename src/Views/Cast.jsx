import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../Services/MoviesApi';
import { KEY } from '../Services/MoviesApi';
import { onScroll } from '../Scroll/Scroll';
import styles from './styles.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => setCast(response.cast))
      .catch(error => new Error())
      .finally(onScroll());
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(item => {
            if (item.profile_path) {
              return (
                <li key={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.profile_path}?api_key=${KEY}`}
                    alt={item.name}
                  ></img>
                  <p className={styles.actor_name}>{item.name}</p>
                  <p>
                    <span className={styles.character}>Character</span>:{' '}
                    {item.character}
                  </p>
                </li>
              );
            } else
              return (
                <li key={item.id}>
                  <p>{item.name}</p>
                  <p>
                    <span className={styles.character}>Character</span>:
                    {item.character}
                  </p>
                </li>
              );
          })}
        </ul>
      )}
    </>
  );
}
Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};
