import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import Loading from '../components/Loading';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // id 값 이용하여 API로 부터 data fetch
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovies(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Header />
                    <div className='detail-div'>
                        <Container className="detail-container">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Paper className="detail-paper">
                                        <div className="detail-intro1">
                                            <img className="detail-img" src={movies.large_cover_image} alt={movies.title} />
                                        </div>
                                        <div className="detail-intro2">
                                            <h2>{movies.title}</h2>
                                            <p>{movies.year} / {movies.runtime}min</p>
                                            <p>★ {movies.rating}</p>
                                            <ul>
                                            {movies.genres && movies.genres.map((g) => (
                                                <li key={g}>{g}　</li>
                                            ))}
                                            </ul>
                                        </div>
                                        <div className="detail-intro3">
                                            <p>{movies.description_intro}</p>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;