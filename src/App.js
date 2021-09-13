import { Route } from 'react-router';
import './App.css';
import Home from './Home/Home';

function App() {
  return <Route path="/" exact component={Home} />;
}

export default App;
