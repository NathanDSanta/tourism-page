import React from "react";
import Hero from "./components/Hero/Hero";
import Activities from "./components/Activities/Activities";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Activities />
      <AudioPlayer />
    </div>
  );
}

export default App;

