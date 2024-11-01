import Upper from "./upper/Upper.jsx"
import Reasons from "./reasons/Reasons.jsx"
import Faqs from "./faqs/Faqs.jsx"
import TrendingShows from "./trendingNow/TrendingShows.jsx"
import Footer from "./footer/Footer.jsx"
import './app.css'

import React, { useState, useEffect } from "react";
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <h1 className="windowWidth">Window Width: {width}px</h1> */}
      <Upper />
      <div className="wrapper">
        <TrendingShows />
        <Reasons />
        <Faqs />
        <Footer />
      </div>
    </>
  )
}