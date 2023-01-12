import useSWR from "swr";
import TopInfos from "../components/TopInfos";
import BotInfos from "../components/BotInfos";
import Img from "../components/Img";
import Head from "next/head";
import { useEffect, useState } from "react";
import useFetch from '../hooks/useFetch'
import Settings from "../components/Settings";
import Header from "../components/Header";
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
  const [isMetric, setIsMetric] = useState(true)
  const [isDark, setIsDark] = useState(true)

  const { isLoading, error, data } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location ? location : "charleroi"}&appid=${process.env.API_KEY}`
  )

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading ..</div>;

  return (
    <>
      <Header pageTitle={data.name} icon={data.weather[0].icon}/>
      <main className="relative w-screen h-screen flex justify-center items-center bg-gradient-to-bl from-zinc-200 to-zinc-50 text-zinc-900 dark:from-zinc-900 dark:to-zinc-700 dark:text-zinc-50 text-lg">
        <div
          className="w-3/4 h-3/4 lg:w-1/2 lg:h-auto xl:w-1/4
                    flex flex-col justify-between
                    p-8 bg-slate-50/60 dark:bg-slate-50/10 rounded-xl shadow-2xl shadow-zinc-300 dark:shadow-zinc-800"
        >
          <TopInfos data={data} />
          <Img data={data} />
          <BotInfos data={data} isMetric={isMetric}/>
        </div>
        <div className="flex flex-row justify-center items-center fixed top-10 lg:top-24">
            <input 
              type="text"
              tabIndex={1}
              onChange={(e) => setInputValue(e.target.value)}
              className="h-10 pl-2 text-zinc-900 bg-slate-50/60 dark:text-zinc-50 dark:bg-zinc-700 rounded-l-md"
              />
            <button 
              tabIndex={2}
              onClick={() => {
                setLocation(inputValue)
                setInputValue("")
              }}
              className="h-10 px-2 bg-zinc-400/60 dark:bg-zinc-600 rounded-r-md">Submit</button>
        </div>
        <Settings isMetric={isMetric} setIsMetric={setIsMetric} isDark={isDark} setIsDark={setIsDark}/>
      </main>
    </>
  );
}
