import { Route, Switch } from 'react-router';
import './App.css';
import Navigation from './Navigation/Navigation';
import HomePage from './Views/HomePage';
import MovieDetailsPage from './Views/MovieDetailsPage';
import MoviesPage from './Views/MoviesPage';
import NotFoundView from './Views/NotFoundView';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
}

export default App;
