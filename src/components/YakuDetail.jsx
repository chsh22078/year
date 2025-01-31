import React from "react";
import { Button } from "./Button";

const YakuDetail = ({ yaku, onBack }) => {
  return (
    <div className="yaku-detail">
      <h2 className="detail-title">{yaku.title}</h2>
      <img src={yaku.hand} alt={yaku.title} className="hand-image" />
      <p className="detail-description">{yaku.description}</p>
      <Button onClick={onBack}>戻る</Button>
    </div>
  );
};

export default YakuDetail;
