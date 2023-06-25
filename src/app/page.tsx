"use client";
import Nav from './components/Nav'
import MovieItem from './components/MovieItem'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';

interface Movie {
  title: string;
  year: number;
  score: number;
  poster: string;
  _id: string;
  reviews: number[];
}

export default function Home() {
  const [recentReleases, setRecentReleases] = useState<Movie[]>([]);
  const [lastYear, setLastYear] = useState<Movie[]>([]);
  const [twoYearsAgo, setTwoYearsAgo] = useState<Movie[]>([]);
  const [threeYearsAgo, setThreeYearsAgo] = useState<Movie[]>([]);
  const [twentyNineteen, setTwentyNineteen] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('https://correct-boxd-backend.onrender.com/movies-by-year/2023')
      .then(response => response.json())
      .then(data => {
        setRecentReleases(data);
      })
      .catch(error => console.error(error));
    fetch('https://correct-boxd-backend.onrender.com/movies-by-year/2022')
      .then(response => response.json())
      .then(data => {
        setLastYear(data);
      })
      .catch(error => console.error(error));
    fetch('https://correct-boxd-backend.onrender.com/movies-by-year/2021')
      .then(response => response.json())
      .then(data => {
        setTwoYearsAgo(data);
      })
      .catch(error => console.error(error));
    fetch('https://correct-boxd-backend.onrender.com/movies-by-year/2020')
      .then(response => response.json())
      .then(data => {
        setThreeYearsAgo(data);
      })
      .catch(error => console.error(error));
    fetch('https://correct-boxd-backend.onrender.com/movies-by-year/2019')
      .then(response => response.json())
      .then(data => {
        setTwentyNineteen(data);
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <main className="w-full m-0 p-0 h-screen bg-zinc-800 overflow-x-hidden">
      <Nav />
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">Recent Releases</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(recentReleases.length !== 0) ? recentReleases.sort((a, b) => b.score - a.score).map((item) => (
          <MovieItem info={item} key={item._id} />
        )) : <BeatLoader size="20px" color="#cbd5e1" className="pl-10 ml-10 pt-5 mt-5" />}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2022 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(lastYear.length !== 0) ? lastYear.sort((a, b) => b.score - a.score).map((item) => (
          <MovieItem info={item} key={item._id} />
        )) : <BeatLoader size="20px" color="#cbd5e1" className="pl-10 ml-10 pt-5 mt-5" />}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2021 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(twoYearsAgo.length !== 0) ? twoYearsAgo.sort((a, b) => b.score - a.score).map((item) => (
          <MovieItem info={item} key={item._id} />
        )) : <BeatLoader size="20px" color="#cbd5e1" className="pl-10 ml-10 pt-5 mt-5" />}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2020 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(threeYearsAgo.length !== 0) ? threeYearsAgo.sort((a, b) => b.score - a.score).map((item) => (
          <MovieItem info={item} key={item._id} />
        )) : <BeatLoader size="20px" color="#cbd5e1" className="pl-10 ml-10 pt-5 mt-5" />}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2019 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(twentyNineteen.length !== 0) ? twentyNineteen.sort((a, b) => b.score - a.score).map((item) => (
          <MovieItem info={item} key={item._id} />
        )) : <BeatLoader size="20px" color="#cbd5e1" className="pl-10 ml-10 pt-5 mt-5" />}
      </div>
    </main>
  )
}
