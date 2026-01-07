import React from "react";
import "./Hero.css";


function Hero() {
  return (
    <div className="Hero">
      <video autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/assets/video/banyoles.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}

export default Hero;
