import React from "react";
import Home from "./Layout/Home";
import { BrowserRouter } from "react-router-dom";
import Meals from "./Layout/Meals";

function HomeLayout() {
  return (
    <BrowserRouter>
      <Meals/>
    </BrowserRouter>
  );
}

export default HomeLayout;
