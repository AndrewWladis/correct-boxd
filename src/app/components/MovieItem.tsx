import Image from "next/image";
import { useEffect, useState } from "react";

interface Movie {
  title: string;
  year: number;
  score: number;
  poster: string;
  _id: string;
  reviews: number[];
}

interface MovieItemProps {
  info: Movie;
}

function calculateAverage(numbers: number[]): String {
  let returnValue = '';
  if (Array.isArray(numbers)) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    returnValue = String(Math.round(average * 10) / 10);
    console.log(returnValue, average)
  }
  return returnValue
}

const MovieItem: React.FC<MovieItemProps> = ({ info }) => {
  const [reviews, setReviews] = useState<String>('');

  useEffect(() => {
    setReviews(calculateAverage(info.reviews))
  }, [])

  return (
    <a href={`/movie/${info._id}`}>
      <div className="bg-zinc-900 rounded-2xl grid grid-cols-2 h-64 m-1" style={{ minWidth: 350, minHeight: 256, maxWidth: 350, maxHeight: 256 }}>
      <div className="w-full h-full flex justify-center items-center">
        <Image loader={() => info.poster} src={info.poster} alt={info.title} width={164} height={230} style={{maxHeight: 230, minHeight: 230}} className="rounded-2xl object-cover" />
      </div>
      <div className="h-full w-full p-2">
        <p className="font-sans font-bold text-xl text-zinc-200">{info.title}</p>
        <p className="font-sans font-bold text-m text-zinc-400">({info.year})</p>
        <p className="font-sans font-bold text-4xl text-zinc-200 py-3">{info.score}</p>
        <p className="font-sans font-normal text-zinc-300 text-m">Audience Score: <p className="font-bold inline">{reviews}</p></p>
      </div>
    </div>
    </a>
  );
};

export default MovieItem