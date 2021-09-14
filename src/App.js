import { Route } from 'react-router';
import './App.css';
import AppBar from './AppBar/AppBar';
import HomePage from './Views/HomePage';
import MoviesPage from './Views/MoviesPage';

function App() {
  return (
    <>
      <AppBar />
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
    </>
  );
}

export default App;
