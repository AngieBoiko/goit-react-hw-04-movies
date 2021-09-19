import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { onScroll } from '../Scroll/Scroll';
import { getMovieReviews } from '../Services/MoviesApi';
import styles from './styles.module.css';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => setReviews(response.results))
      .finally(onScroll());
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={uuidv4()}>
                <h3 className={styles.review_author}>{review.author}</h3>
                <p className={styles.review_text}>{review.content}</p>
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
