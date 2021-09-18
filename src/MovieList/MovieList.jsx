import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movieArray }) {
  const location = useLocation();
  return (
    <ul>
      {movieArray &&
        movieArray.map(movie => (
          <li key={movie.id}>
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
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
