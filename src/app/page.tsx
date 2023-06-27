"use client";
import Nav from './components/Nav'
import MovieItem from './components/MovieItem'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import LoadingItem from './components/LoadingItem';

interface Movie {
  title: string;
  year: number;
  score: number;
  poster: string;
  _id: string;
  reviews: number[];
}
type MovieArray = [number, Movie];
export default function Home() {
  const [recentReleases, setRecentReleases] = useState<Movie[]>([]);
  const [lastYear, setLastYear] = useState<Movie[]>([]);
  const [twoYearsAgo, setTwoYearsAgo] = useState<Movie[]>([]);
  const [threeYearsAgo, setThreeYearsAgo] = useState<Movie[]>([]);
  const [twentyNineteen, setTwentyNineteen] = useState<Movie[]>([]);
  const [twentyEighteen, setTwentyEighteen] = useState<Movie[]>([]);
  const [twentySeventeen, setTwentySeventeen] = useState<Movie[]>([]);

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
    fetch('https://correct-boxd-backend.onrender.com/movies-by-year/2018')
      .then(response => response.json())
      .then(data => {
        setTwentyEighteen(data);
      })
      .catch(error => console.error(error));
    fetch('https://correct-boxd-backend.onrender.com/movies-by-year/2017')
      .then(response => response.json())
      .then(data => {
        setTwentySeventeen(data);
      })
      .catch(error => console.error(error));
  }, [])

  return (
    <main className="w-full m-0 p-0 h-screen bg-zinc-800 overflow-x-hidden">
      <Nav />
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">Recent Releases</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(recentReleases.length !== 0) ? recentReleases.sort((a: Movie, b: Movie) => b.score - a.score).map((item: Movie) => (
          <MovieItem info={item} key={item._id} />
        )) : <>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </>}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2022 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(lastYear.length !== 0) ? lastYear.sort((a: Movie, b: Movie) => b.score - a.score).map((item: Movie) => (
          <MovieItem info={item} key={item._id} />
        )) : <>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </>}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2021 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(twoYearsAgo.length !== 0) ? twoYearsAgo.sort((a: Movie, b: Movie) => b.score - a.score).map((item: Movie) => (
          <MovieItem info={item} key={item._id} />
        )) : <>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </>}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2020 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(threeYearsAgo.length !== 0) ? threeYearsAgo.sort((a: Movie, b: Movie) => b.score - a.score).map((item: Movie) => (
          <MovieItem info={item} key={item._id} />
        )) : <>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </>}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2019 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(twentyNineteen.length !== 0) ? twentyNineteen.sort((a: Movie, b: Movie) => b.score - a.score).map((item: Movie) => (
          <MovieItem info={item} key={item._id} />
        )) : <>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </>}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2018 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(twentyEighteen.length !== 0) ? twentyEighteen.sort((a: Movie, b: Movie) => b.score - a.score).map((item: Movie) => (
          <MovieItem info={item} key={item._id} />
        )) : <>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </>}
      </div>
      <p className="font-sans font-bold text-3xl text-zinc-300 px-3 py-2">2017 Movies</p>
      <div className="!overflow-x-scroll flex flex-row min-w-0 pb-5">
        {(twentySeventeen.length !== 0) ? twentySeventeen.sort((a: Movie, b: Movie) => b.score - a.score).map((item: Movie) => (
          <MovieItem info={item} key={item._id} />
        )) : <>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </>}
      </div>
    </main>
  )
}
