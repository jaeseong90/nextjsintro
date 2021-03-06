import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Seo from './Seo';
import { prefix } from '../config';

export default function Home() {
  //export default function Home({ movies }) {

  const router = useRouter();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=1a3810937b0dde9cf8fcbaabd86871a7`,
        )
      ).json();
      //const { results } = await (await fetch(`${prefix}/api/movies`)).json();
      setMovies(results);
      console.log(results);
      console.log('results');
    })();
  }, []);

  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (await fetch(`${prefix}/api/movies`)).json();
//   return {
//     props: {
//       movies: results,
//     },
//   };
// }
