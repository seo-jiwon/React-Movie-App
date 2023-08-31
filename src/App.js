import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Movie from './components/Movie';
import Detail from './components/Detail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/movie/:id' element={<Detail/>} />
      </Routes>
    </Router>
  )
    ;
}

export default App;