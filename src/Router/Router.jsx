import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import SeedCalculator from "../Components/Seed/SeedCalculator";
import CropDiseaseDetector from "../Components/Detector/CropDiseasesDetector";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/calculator",
    element: <SeedCalculator/>,
  },
  {
    path : "/detector",
    element : <CropDiseaseDetector/>
  }
]);

export default Router;
