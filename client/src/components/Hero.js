import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import CartAdded from "../modals/CartAdded";
import QuickDonate from "./QuickDonate";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__content">
          <div className="hero__content-text">
            <h1>
              Make Someone's <span>Life</span> by Giving of Yours
            </h1>
            <p>
              Volunteers do not necessarily have the time they just have the
              heart
            </p>
            <div className="hero__content-action">
              <Link to="/about">Read more...</Link>
              <Link to="/projects">Our Projects</Link>
            </div>
          </div>
        </div>
        <QuickDonate />
      </div>
    </>
  );
}
