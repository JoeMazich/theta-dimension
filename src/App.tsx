import "./App.scss";

import { Route, Routes } from "react-router-dom";

import AboutUs from "./screens/AboutUs";
import AreasOfExpertise from "./screens/AreasOfExpertise";
import Home from "./screens/Home";
import ProjectSamples from "./screens/ProjectSamples";
import React from "react";
import Services from "./screens/Services";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/samples" element={<ProjectSamples />} />
        <Route path="/services" element={<Services />} />
        <Route path="/expertise" element={<AreasOfExpertise />} />
      </Routes>
    </div>
  );
};

export default App;
