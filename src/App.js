import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './routes/Home';
import Movie from './components/Movie';
import Detail from './components/Detail';
import Genre from './components/Genre.js';

function App() {
  const [genres, setGenres] = useState(['sci-fi', 'animation', 'romance']);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {genres.map((genre, index) => {
          return (
            <Route path={`/movie/${genre}`} element={<Genre key={index} genre={genre}/>} />
          )
        })}
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/movie/:id' element={<Detail/>} />
      </Routes>
    </Router>
  )
    ;
}

export default App;