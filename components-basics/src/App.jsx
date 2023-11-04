import MovieList from './components/MovieList'
import movies from './assets/movies';
import Timer from './components/Timer';
import Counter from './components/Counter';
import './App.css'

function App() {
  return (
    <div>
      <h1>My first Dynamic React App</h1>

     <Counter />

      <Timer startTime={5} />
     

      <MovieList movies={movies} headingText="Movie list"/>
      
    </div>
  )
}

export default App
