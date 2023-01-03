import useSWR from "swr";
import format from "date-fns/format";
import { BsWind, BsDroplet, BsSun } from "react-icons/bs";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const data = {
    coord: {
      lon: 4.4465,
      lat: 50.413,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 282.29,
      feels_like: 280.55,
      temp_min: 281.63,
      temp_max: 283.19,
      pressure: 1018,
      humidity: 93,
    },
    visibility: 10000,
    wind: {
      speed: 3.13,
      deg: 250,
      gust: 4.92,
    },
    clouds: {
      all: 75,
    },
    dt: 1672656591,
    sys: {
      type: 1,
      id: 1228,
      country: "BE",
      sunrise: 1672645352,
      sunset: 1672674555,
    },
    timezone: 3600,
    id: 2800482,
    name: "Charleroi",
    cod: 200,
  };
  // const { isLoading, error, data } = useSWR(
  //   `https://api.openweathermap.org/data/2.5/weather?q=charleroi&appid=${process.env.API_KEY}`,
  //   fetcher
  // );

  // if (error) return <div>Failed to load</div>;
  // if (isLoading) return <div>Loading ..</div>;

  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center bg-zinc-900 text-zinc-50 text-lg">
        <div className="w-1/4 p-8 bg-zinc-800 rounded-xl">
          <div className="flex flex-row justify-between items-center">
            <h1 className="py-1 px-2 bg-zinc-700 rounded-sm border border-zinc-600">
              {data.name}
            </h1>
            <span className="font-medium">{format(new Date(), "HH:mm")}</span>
          </div>
          <div className="h-56 flex justify-center items-center">
            <img
              className="wiggle"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt={data.weather[0].description}
            />
          </div>
          <div className="w-full flex flex-row justify-between items-end">
            <div>
              <div className="flex flex-row items-center gap-2">
                <BsWind />
                <span>{Math.floor(data.wind.speed * 3.6)} km/h</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <BsDroplet />
                <span>{data.main.humidity}%</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <BsSun />
                <span>{format(new Date(data.sys.sunset * 1000), "HH:mm")}</span>
                <br></br>
              </div>
            </div>
            <div>
              <span className="text-8xl font-light">
                {Math.floor(data.main.temp - 273.15)}°c
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
