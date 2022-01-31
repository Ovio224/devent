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
// import SmoothScrollbar from "smooth-scrollbar";

function App() {
  useEffect(() => {
    window.onload = () => {
      new CursorObject(document.querySelector(".cursor"));

      // Scrollbar.init(document.querySelector('#my-scrollbar'), options);
      new MarqueeEffect();
      const view = document.querySelector("#app");
      // @ts-ignore

      // SmoothScrollbar.init(view, {
      //   // renderByPixels: false,
      //   damping: 0.02,
      //   // continuousScrolling: true,
      // });
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
