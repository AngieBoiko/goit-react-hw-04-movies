import React, { useEffect, useState, lazy, Suspense } from 'react';
import {
  Link,
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
            <ul>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}?api_key=${KEY}`}
                  alt={movie.original_title}
                ></img>
              </li>
              <li>
                <h2>{movie.original_title}</h2>
                <p>User score:{movie.vote_average}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.map(genre => (
                    <li key={genre.id}> {genre.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link
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
              </Link>
            </li>
            <li>
              <Link
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
              </Link>
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
