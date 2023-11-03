import MovieList from './components/MovieList'
import './App.css'
import movies from './assets/movies';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <h1>My first Dynamic React App</h1>

      <Timer></Timer>

      <MovieList movies={movies} headingText="Movie list"/>
      
    </div>
  )
}

export default App
