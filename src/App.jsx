import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Attractions from "./components/Attractions/Attractions";
import Activities from "./components/Activities/Activities";
import Cart from "./components/Cart/Cart";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Attractions />
      <Activities />
      <Cart />
      <AudioPlayer />
      <Footer />
    </div>
  );
}

export default App;

