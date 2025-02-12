import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import SeedCalculator from "../Components/SeedCalculator";
import CropDiseaseDetector from "../Components/CropDiseasesDetector";

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
