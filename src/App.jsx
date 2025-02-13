import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import { About } from "./components/About/About";

import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
