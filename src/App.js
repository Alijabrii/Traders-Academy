import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ModeOfLearning from "./components/ModeOfLearning";
import Courses from "./components/Courses";
import Achievements from "./components/Achievements";
import Mentors from "./components/Mentors";
import Contact from "./components/Contact";
import "./styles/header.css";
import "./styles/main.css";

function App() {
  return (
    <>
      <Header />
      <div className="section-separator"></div>
      <Hero />
      <div className="section-separator"></div>
      <Courses />
      <div className="section-separator"></div>
      <ModeOfLearning />
      <div className="section-separator"></div>
      <Achievements />
      <div className="section-separator"></div>
      <Features />
      <div className="section-separator"></div>
      <Mentors />
      <div className="section-separator"></div>
      <Contact />
    </>
  );
}

export default App;
