import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';

export default function MovieList({ movieArray }) {
  const location = useLocation();
  return (
    <ul>
      {movieArray &&
        movieArray.map(movie => {
          if (movie.original_title) {
            return (
              <li key={movie.id} className={styles.item}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: {
                        location,
                        label: 'Go back to movies',
                      },
                    },
                  }}
                  className={styles.movie_link}
                >
                  {movie.original_title}
                </Link>
              </li>
            );
          }
        })}
    </ul>
  );
}
