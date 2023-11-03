import MovieList from './components/MovieList'
import './App.css'

const movies = [
  {
    title: 'The Matrix',
    description: 'Description Here'
  },
   {
    title: 'Prison Break',
    description: 'Description Here'
  },
    {
    title: 'Breaking Bad',
    description: 'Description Here'
},

]

function App() {
  return (
    <div>
      <h1>My first Dynamic React App</h1>

      <MovieList headingText="Filmi" secondaryText="Secondary Text" />
      <MovieList headingText= "Pedali" secondaryText = "Secondary Text" />
    </div>
  )
}

export default App
