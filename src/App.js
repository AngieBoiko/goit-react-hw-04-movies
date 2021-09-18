import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Navigation from './Navigation/Navigation';
import Spinner from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('./Views/HomePage' /*webpackChunkName:'home-page'*/),
);
const MovieDetailsPage = lazy(() =>
  import('./Views/MovieDetailsPage' /*webpackChunkName:'movie-details-page'*/),
);
const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /*webpackChunkName:'movie-page'*/),
);

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
