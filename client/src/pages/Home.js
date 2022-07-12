import React from "react";
import Activities from "../components/Activities";
import BeVolunteer from "../components/BeVolunteer";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/News";
import Projects from "../components/Projects";
import SuccessProjects from "../components/SuccessProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Activities />
      <SuccessProjects />
      <Projects />
      <BeVolunteer />
      <News />
      <Footer />
    </div>
  );
}
