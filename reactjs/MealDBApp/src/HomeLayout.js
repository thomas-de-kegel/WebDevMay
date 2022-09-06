import React from "react";
import Home from "./Layout/Home";
import { BrowserRouter } from "react-router-dom";
import Meals from "./Layout/Meals";
import Recipe from "./Layout/Recipe";

function HomeLayout() {
  return (
    <BrowserRouter>
      <Recipe/>
    </BrowserRouter>
  );
}

export default HomeLayout;
