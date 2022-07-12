import React from "react";
import { useHistory } from "react-router-dom";

export default function BeVolunteer() {
  const history = useHistory();
  const pushHistory = (e) => {
    e.preventDefault();
    history.push("/projects");
  };
  return (
    <div className="beVolunteer">
      <div className="beVolunteer__content">
        <h1>
          Become A Proud <span>Volunteer</span> Now
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={pushHistory}>Join Now</button>
      </div>
    </div>
  );
}
