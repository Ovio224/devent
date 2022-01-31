import { useEffect } from "react";
import "./sass/main.scss";
import CursorObject from "./js/cursor";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cursor } from "./components/Cursor";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact";
import MarqueeEffect from "./js/marquee-effect";

function App() {
  useEffect(() => {
    window.onload = () => {
      new CursorObject(document.querySelector(".cursor"));
      new MarqueeEffect();
    };
  }, []);
  return (
    <div data-cursor="-visible" id="app">
      <Cursor />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
