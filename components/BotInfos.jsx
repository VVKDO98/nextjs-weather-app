import React from "react";
import format from "date-fns/format";
import { BsWind, BsDroplet, BsSun } from "react-icons/bs";

function BotInfos({ data, isCelsius }) {
  return (
    <div className="w-full flex flex-row justify-between items-end">
      <div>
        <div className="flex flex-row items-center gap-2">
          <BsWind className="text-zinc-400" />
          <span>{isCelsius ? `${Math.floor(data.wind.speed * 3.6)}km/h` : `${Math.floor(data.wind.speed)}m/h`}</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <BsDroplet className="text-zinc-400" />
          <span>{data.main.humidity}%</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <BsSun className="text-zinc-400" />
          <span>{format(new Date(data.sys.sunset * 1000), "HH:mm")}</span>
          <br></br>
        </div>
      </div>
      <div>
        <span
          className="text-6xl sm:text-8xl
                    font-light"
        >
          {isCelsius ? `${Math.floor(data.main.temp - 273.15)}°c` : `${Math.floor(((data.main.temp - 273.15) * 9/5 + 32))}°f`}
        </span>
      </div>
    </div>
  );
}

export default BotInfos;
