import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NatureGallery from "./Pages/NatureGallery";
import CityGallery from "./Pages/CityGallery";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NatureGallery />} />
        <Route path="/city" element={<CityGallery />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
