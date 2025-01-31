import React from "react";
import { Card } from "./Card";

const YakuCard = ({ yaku, onSelect }) => {
  return (
    <Card className="yaku-card" onClick={() => onSelect(yaku)}>
      <img src={yaku.image} alt={yaku.title} className="yaku-image" />
      <div className="yaku-info">
        <h2 className="yaku-title">{yaku.title}</h2>
        <p className="yaku-description">{yaku.description}</p>
      </div>
    </Card>
  );
};

export default YakuCard;
