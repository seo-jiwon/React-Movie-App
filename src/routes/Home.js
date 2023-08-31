import { useEffect, useState } from "react";
import Header from '../components/Header';
import Main from '../components/Main';
import Loading from '../components/Loading';


function Home() {
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
  // console.log(movies);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header movies={movies}/>
          <div className='movies'>
            <div className='movies-wrap'>
              {movies.map((movie) => (
                <Main
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                />
              ))}
            </div>
          </div>
          {/* <Movie movies={movies} /> */}
        </div>
      )}
    </div>
  );
}

export default Home;