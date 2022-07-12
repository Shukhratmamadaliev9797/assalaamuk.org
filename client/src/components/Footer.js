import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container-quickLinks">
          <span>Quick Links</span>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Activities</Link>
            </li>
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__container-others">
          <span>Other Pages</span>
          <ul>
            <li>
              <Link>Privacy & Policy</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Disclaimer</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="footer__container-contactInfo">
          <span>Contact Info</span>
          <ul>
            <li>
              <i class="fa-solid fa-location-dot footer__container-contactInfo-icon"></i>
              Jl. Sunset Road No.815, Kuta, Bali 80361
            </li>
            <li>
              <i class="fa-solid fa-phone footer__container-contactInfo-icon"></i>
              (+62) 8152 254 239
            </li>
            <li>
              <i class="fa-solid fa-envelope footer__container-contactInfo-icon"></i>
              contact@domain.com
            </li>
          </ul>
        </div>
        <div className="footer__container-social">
          <span>Follow Us</span>
          <ul>
            <li>
              <a>
                <i class="fa-brands fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa-brands fa-twitter-square"></i>
              </a>
            </li>
            <li>
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div>
          <h1>
            <span>As-Salaam</span> UK Foundation
          </h1>
        </div>
        <div>
          <p>Charity & Donation Designed by Shukhrat Mamadaliev</p>
        </div>
        <div>Copyright © 2022. All rights reserved.</div>
      </div>
    </div>
  );
}
