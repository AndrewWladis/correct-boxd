"use client";
import Nav from '../components/Nav'
import MovieItem from '../components/MovieItem'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';

interface Movie {
  title: string;
  year: number;
  score: number;
  reviews: number[];
  poster: string;
  _id: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('https://correct-boxd-backend.onrender.com/highest-rated')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <main className="w-full m-0 p-0 h-screen bg-zinc-800 overflow-x-hidden">
      <Nav />
      <div className="w-full h-fit flex flex-wrap flex-row justify-center">
        {(movies.length !== 0) ? movies.sort((a, b) => b.score - a.score).map((item) => (
          <MovieItem info={item} key={item._id} />
        )) : <BeatLoader size="20px" color="#cbd5e1" className="pt-10 mt-10" />}
      </div>
    </main>
  )
}
