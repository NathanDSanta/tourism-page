import React from "react";
import "./ActivityCard.css";

function ActivityCard({ name, link, mapa }) {
  return (
    <div className="ActivityCard" style={{ "--link": `url(${link})` }}>
      <h2><a href={mapa}>{name}</a></h2>
    </div >
  );
}

export default ActivityCard;
