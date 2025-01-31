import React from "react";
import YakuCard from "./YakuCard";

const YakuList = ({ yakuList, onSelect }) => {
  return (
    <div className="yaku-list">
      {yakuList.map((yaku, index) => (
        <YakuCard key={index} yaku={yaku} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default YakuList;
