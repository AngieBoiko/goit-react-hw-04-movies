import { Route } from 'react-router';
import './App.css';
import HomePage from './HomePage/HomePage';

function App() {
  return <Route path="/" exact component={HomePage} />;
}

export default App;
