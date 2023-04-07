import React from "react";
import { Article, Feature, Navbar, Ctb, Darby } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Darby />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Ctb />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
