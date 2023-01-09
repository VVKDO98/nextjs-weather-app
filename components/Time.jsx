import React from "react";
import format from "date-fns/format";
import { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-medium">{format(time, "HH:mm")}</span>;
}

export default Time;
