import React, { useEffect, useState, lazy, Suspense } from 'react';
import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { getMovieDetails, KEY } from '../Services/MoviesApi';
import GoBackBtn from '../GoBackButton/GoBackBtn';
import { toast } from 'react-toastify';
import { onScroll } from '../Scroll/Scroll';
import Spinner from '../Loader/Loader';
import styles from './styles.module.css';

const Cast = lazy(() => import('./Cast' /*webpackChunkName:'movie-cast'*/));
const Reviews = lazy(() =>
  import('./Reviews' /*webpackChunkName:'movie-reviews'*/),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => toast.error('Sorry, something go wrong'))
      .finally(onScroll());
  }, [movieId]);

  function onLinkClick(e) {
    if (location?.state?.from?.location) {
      history.push(location.state.from.location);
    }
  }

  return (
    <>
      {movie && (
        <section>
          <GoBackBtn />
          <div>
            <ul className={styles.movie_container}>
              <li className={styles.movie_item}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}?api_key=${KEY}`}
                  alt={movie.original_title}
                ></img>
              </li>
              <li className={styles.movie_item}>
                <h2 className={styles.movie_title}>{movie.original_title}</h2>
                <p className={styles.movie_details_text}>
                  User score:{movie.vote_average}
                </p>
                <h3 className={styles.movie_details_title}>Overview</h3>
                <p className={styles.movie_details_text}>{movie.overview}</p>
                <h3 className={styles.movie_details_title}>Genres</h3>
                <ul className={styles.movie_secondary_container}>
                  {movie.genres.map(genre => (
                    <li key={genre.id} className={styles.movie_secondary_name}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <h3 className={styles.movie_details_title}>Additional information</h3>
          <ul className={styles.movie_secondary_container}>
            <li className={styles.movie_secondary_name}>
              <NavLink
                activeClassName={styles.active}
                className={styles.movie_link}
                onClick={onLinkClick}
                to={{
                  pathname: `${url}/cast`,
                  state: {
                    from: {
                      location: location.state.from.location,
                      label: 'Go back to movies',
                    },
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={styles.movie_secondary_name}>
              <NavLink
                activeClassName={styles.active}
                className={styles.movie_link}
                onClick={onLinkClick}
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    from: {
                      location: location.state.from.location,
                      label: 'Go back to movies',
                    },
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<Spinner />}>
            <Route
              path={`${path}/cast`}
              render={() => <Cast movieId={movieId} />}
            />
            <Route
              path={`${path}/reviews`}
              render={() => <Reviews movieId={movieId} />}
            />
          </Suspense>
        </section>
      )}
    </>
  );
}
