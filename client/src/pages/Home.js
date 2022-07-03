import React from "react";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import News from "../components/News";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Activities />
      <Projects />
      <News />
    </div>
  );
}
