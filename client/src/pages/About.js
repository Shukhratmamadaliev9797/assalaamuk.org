import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className="aboutPage">
        <div className="aboutPage__hero">
          <div className="aboutPage__hero-content">
            <div>
              <h1>
                <span>We Are In A Mission</span> To Help The Helpness
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div className="aboutPage__body">
            <div className="aboutPage__body-content">
              <div>
                <h1>About us</h1>
                <p>
                  Until recently, the prevailing view assumed lorem ipsum was
                  born as a nonsense text. “It's not Latin, though it looks like
                  it, and it actually says nothing,” Before & After magazine
                  answered a curious reader, “Its ‘words’ loosely approximate
                  the frequency with which letters occur in English, which is
                  why at a glance it looks pretty real.” As Cicero would put it,
                  “Um, not so fast.” The placeholder text, beginning with the
                  line “Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit”, looks like Latin because in its youth, centuries ago,
                  it was Latin. Richard McClintock, a Latin scholar from
                  Hampden-Sydney College, is credited with
                </p>
                <p>
                  sit amet, consectetur adipiscing elit”, looks like Latin
                  because in its youth, centuries ago, it was Latin. Richard
                  McClintock, a Latin scholar from Hampden-Sydney College, is
                  credited with discovering the source behind the ubiquitous
                  filler text. In seeing a sample of lorem ipsum, his interest
                  was piqued by consectetur—a genuine, albeit rare, Latin word.
                </p>
              </div>
            </div>
            <div className="aboutPage__body-image">
              <div>
                <img src="./images/body-about.jpeg" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
