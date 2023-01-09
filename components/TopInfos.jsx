import React from "react";
import Time from "./Time";

function TopInfos({ data }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="py-1 px-2 bg-zinc-600 rounded-sm border border-zinc-500">
        {data.name}
      </h1>
      <Time />
    </div>
  );
}

export default TopInfos;
