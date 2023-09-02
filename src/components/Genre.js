import { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';

function Genre({ genre }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=like_count`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

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
                    <ul>
                      {movie.genres.map((g) => (
                        <li key={g}>{g}　</li>
                      ))}
                    </ul>
                    <p>{movie.summary.length > 200 ? `${movie.summary.slice(0, 200)}...` : movie.summary}</p>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
          </div>
        </div>
      )}
    </div>
  );
}

export default Genre;