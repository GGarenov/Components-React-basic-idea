import MovieList from './components/MovieList'
import './App.css'
import movies from './assets/movies';

function App() {
  return (
    <div>
      <h1>My first Dynamic React App</h1>

      <MovieList movies={ movies} headingText="Filmi"/>
      
    </div>
  )
}

export default App
