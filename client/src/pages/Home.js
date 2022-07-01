import React from "react";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Activities />
      <Projects />
    </div>
  );
}
