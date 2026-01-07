import React from "react";
import Hero from "./components/Hero/Hero";
import Activities from "./components/Activities/Activities";
import More from "./components/More/More";
import Title from "./components/Title/Title";
import Body from "./components/Body/Body";
import Tags from "./components/Tags/Tags";
import Footer from "./components/Footer/Footer"
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <More />
      <Hero />
      <Activities />
      <Body />
      <Tags />
      <AudioPlayer />
      <Footer />
    </div>
  );
}

export default App;

