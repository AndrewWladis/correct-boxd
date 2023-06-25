"use client";
import Nav from '../../components/Nav'
import MovieItem from '../../components/MovieItem'
import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import { useParams } from 'next/navigation';
import Image from "next/image";

interface Movie {
  title: string;
  year: number;
  score: number;
  poster: string;
  header: string;
  _id: string;
  reviews: number[];
}

interface SelectComponentState {
  selectedValue: string;
}

function calculateAverage(numbers: number[]): String {
  let returnValue = '';
  if (Array.isArray(numbers)) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    returnValue = String(Math.round(average * 10) / 10);
  }

  return returnValue
}

function chooseColor(num: number) {
  let color;
  if (num < 5.9) {
    color = '#ef4444'
  } else if (num < 8.3) {
    color = '#ca8a04'
  } else {
    color = '#22c55e'
  }
  return color
}

export default function Home() {
  const [rating, setRating] = useState<SelectComponentState['selectedValue']>('10');
  const [audienceReview, setAudienceReview] = useState<String>('');
  const [isBoxLoading, setIsBoxLoading] = useState<Boolean>(false);
  const [info, setInfo] = useState<Movie>({
    title: "none",
    year: 0,
    score: 0,
    poster: "none",
    header: "none",
    _id: "none",
    reviews: []
  });

  const params = useParams();

  const numbers = [];

  for (let i = 10; i >= 0; i -= 0.1) {
    numbers.push(i.toFixed(1));
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(event.target.value);
  };

  async function setMovieData() {
    fetch(`https://correct-boxd-backend.onrender.com/movie/${params.movie}`)
      .then(response => response.json())
      .then(data => {
        setInfo(data);
      })
      .catch(error => console.error(error));
  }

  async function makeRatingReq() {
    setIsBoxLoading(true)
    fetch(`https://correct-boxd-backend.onrender.com/movies/${info._id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        review: rating
      })
    })
      .then(response => response.json())
      .then(() => {
        setMovieData()
        setIsBoxLoading(false)
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    setMovieData()
  }, [])

  useEffect(() => {
    if (Array.isArray(info.reviews)) {
      if (info.reviews.length !== 0) {
        setAudienceReview(calculateAverage(info.reviews))
      }
    }
  }, [info])

  return (
    <main className="w-full m-0 p-0 h-screen bg-zinc-800 overflow-x-hidden">
      <Nav />
      <div className="w-full flex justify-center items-center flex-col">
        {(info.poster === "none") ? <BeatLoader size="20px" color="#cbd5e1" className="pt-10 mt-10" /> :
          <>
            <div style={{
              backgroundImage: `url(${info.header})`,
              height: 250,
              width: '100%',
              opacity: 0.5
            }} className="object-cover w-full bg-no-repeat bg-cover flex justify-center items-center bg-center">
              <p className='text-4xl font-bold text-white text-center z-10 p-1'>{info.title.toUpperCase()}</p>
            </div>
            <div style={{ backgroundColor: chooseColor(info.score) }} className="w-11/12 self-center m-3 rounded-full h-14 flex flex-row justify-center items-center">
              <p className="font-sans text-4xl text-zinc-200 py-3 font-black">{info.score}/10</p>
            </div>
            <div className="self-center rounded-full bg-slate-600 h-10 flex flex-row justify-center items-center w-4/5">
              <p className="font-sans text-2xl text-zinc-200 py-3 font-semibold">Audience Score: {audienceReview}/10</p>
            </div>
            {isBoxLoading ? <BeatLoader size="20px" color="#cbd5e1" className="pt-10 mt-10" /> : <div style={{ width: 300, height: 150 }} className='mt-4 rounded-xl bg-gradient-to-r from-cyan-950  to-sky-950 flex flex-col p-3'>
              <p className='font-semibold text-2xl text-zinc-300 text-left'>Rate This Movie:</p>
              <div className='w-full flex flex-row justify-evenly'>
                <select value={rating} onChange={handleSelectChange} className='w-fit m-4 text-white text-3xl bg-gray-800 rounded-xl p-1'>
                  {numbers.map((number, index) => (
                    <option key={index} value={number}>{number}</option>
                  ))}
                </select>
                <button className='w-fit m-4 text-white text-2xl bg-gray-700 rounded-xl font-semibold px-3' onClick={() => {makeRatingReq()}}>Submit</button>
              </div>
            </div>}
          </>}
      </div>
    </main>
  )
}
