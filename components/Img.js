import React from "react";

function Img({ data }) {
  return (
    <div className="h-64 flex justify-center items-center">
      <img
        className="drop-shadow-md"
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
}

export default Img;
