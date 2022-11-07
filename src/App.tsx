import React from "react";
import "./App.scss";

import Card from "./components/common/Card";
import Navigation from "./components/navigation/NavigationHandlerButton";
import ProjectSamples from "./screens/ProjectSamples";

const App = () => {
  return (
    <div className="App">
      <ProjectSamples />
    </div>
  );
};

export default App;
