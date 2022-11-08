import "./styles/projectSamples.scss";

import Card from "../components/common/Card";
import Navigator from "../components/navigation/NavigationHandlerButton";
import React from "react";

const ProjectSamples = () => {
  return (
    <>
      <div className="proj_samples_layout">
        <Card
          header="Structural Adhesives"
          body="Develop a structural adhesive that bonds thin substrates, or different materials, without warping or fracturing."
        />
        <Card
          header="Product Development"
          body="Experiment with and apply new surface active chemistries to formulate coatings and adhesives that protect architectural structures, bond plastic pipes, or bond fabrics and elastomers in apparel applications without the use of VOC."
        />
        <Card
          header="Biomaterial Uses"
          body="Select a biomaterial that could serve in a corneal implant application."
        />
        <Card
          header="Medical Device"
          body="Develop implantable medical devices that are safe, bioresorbable, and promote healthy tissue ingrowth.  Propose mechanisms that might successfully address healing of chronic wounds."
        />
        <Card
          header="Solving Quality Problems"
          body="Solve quality problems with physical properties of an expandable structural adhesive"
        />
        <Card
          header="Pultruded Products"
          body="Develop thermoplastic polymers for high temperature pultrusion and high temperature bonding applications."
        />
      </div>
      <Navigator className="proj_samples_nav" />
    </>
  );
};

export default ProjectSamples;
