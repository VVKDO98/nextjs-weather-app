import useSWR from "swr";
import TopInfos from "../components/TopInfos";
import BotInfos from "../components/BotInfos";
import SearchButton from "../components/SearchButton";
import Img from "../components/Img";
import Head from "next/head";
import SearchInput from "../components/SearchInput";
import { useEffect, useState } from "react";
import useFetch from '../hooks/useFetch'
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  // const data = {
  //   coord: {
  //     lon: 4.4465,
  //     lat: 50.413,
  //   },
  //   weather: [
  //     {
  //       id: 803,
  //       main: "Clouds",
  //       description: "broken clouds",
  //       icon: "04d",
  //     },
  //   ],
  //   base: "stations",
  //   main: {
  //     temp: 282.29,
  //     feels_like: 280.55,
  //     temp_min: 281.63,
  //     temp_max: 283.19,
  //     pressure: 1018,
  //     humidity: 93,
  //   },
  //   visibility: 10000,
  //   wind: {
  //     speed: 3.13,
  //     deg: 250,
  //     gust: 4.92,
  //   },
  //   clouds: {
  //     all: 75,
  //   },
  //   dt: 1672656591,
  //   sys: {
  //     type: 1,
  //     id: 1228,
  //     country: "BE",
  //     sunrise: 1672645352,
  //     sunset: 1672674555,
  //   },
  //   timezone: 3600,
  //   id: 2800482,
  //   name: "Charleroi",
  //   cod: 200,
  // };
  const [inputValue, setInputValue] = useState()
  const [location, setLocation] = useState()

  const { isLoading, error, data } = fetchWeather(location)

  function fetchWeather(location){
    if(location == null){
      location = 'charleroi'
    }

    return useFetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`
    )
  }

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading ..</div>;

  

  return (
    <>
      <Head>
        <title>Weather in {data.name}</title>
        {/* <link
          rel="icon"
          href={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        /> */}
      </Head>
      <main className="relative w-screen h-screen flex justify-center items-center bg-gradient-to-bl from-zinc-900 to-zinc-700 text-zinc-50 text-lg">
        <div
          className="w-3/4 h-3/4 lg:w-1/2 lg:h-auto xl:w-1/4
                    flex flex-col justify-between
                    p-8 bg-slate-50/10 rounded-xl shadow-2xl shadow-zinc-800"
        >
          <TopInfos data={data} />
          <Img data={data} />
          <BotInfos data={data} />
        </div>
        <div className="fixed top-10 right-1/4">
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => {
              setLocation(inputValue)
            }}>Submit</button>
        </div>
      </main>
    </>
  );
}
