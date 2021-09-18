import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getMovieReviews } from '../Services/MoviesApi';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(response => setReviews(response.results));
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={uuidv4()}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {!reviews ||
        (reviews.length === 0 && (
          <p>We don't have any reviews for this movie </p>
        ))}
    </>
  );
}
