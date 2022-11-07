import React from "react";
import "./App.scss";

import Card from "./components/common/Card";
import Navigation from "./components/navigation/NavigationHandlerButton";

const App = () => {
  return (
    <>
      <div className="App">
        <Card
          header="Structural Adhesives"
          body="Develop a structural adhesive that bonds thin substrates, or different materials, without warping or fracturing."
        />
        <Card
          header="Medical Device"
          body="Develop implantable medical devices that are safe, bioresorbable, and promote healthy tissue ingrowth. Propose mechanisms that might successfully address healing of chronic wounds."
        />
        <Navigation />
      </div>
    </>
  );
};

export default App;
