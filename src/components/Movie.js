import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import Loading from '../components/Loading';

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=12&sort_by=like_count`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className='movie-div'>
          <Container className="movie-container">
            <Grid container spacing={3}>
              {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={6} lg={4} >
                  <Paper className="movie-paper">
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <h2>
                      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </h2>
                    <p>{movie.summary.length > 200 ? `${movie.summary.slice(0, 200)}...` : movie.summary}</p>
                    <ul>
                      {movie.genres.map((g) => (
                        <li key={g}>{g}　</li>
                      ))}
                    </ul>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
          </div>
        </div>
      )}
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie