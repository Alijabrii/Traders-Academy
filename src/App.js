import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import "./styles/main.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Contact />
    </>
  );
}

export default App;
