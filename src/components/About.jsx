import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import "./About.css";

export default function About() {
  return (
    <>
      <Login />
      <div className="pqr">
        <div className="queue">
          <h2 className="n">Our Mission</h2>
          <div className="para">
            <p className="op">
              Our mission is to provide a comprehensive platform for
              authenticated users(students/staff) for addressing their issues to
              their respective college or institution.Our website also enable
              authorities to directly look upon the issues raised by their own
              college/institution students through filtering Our future scope
              and scalibilty is to make this platform available to maximum
              possible educational institutions and outstretch this idea beyond
              to other platforms and workplaces as well.
            </p>
          </div>
        </div>
        <div className="ramesh">
          <h2 className="n">Meet Our Team Members</h2>
          <div className="im">
            <img src="ansh.png" alt="" className="iii" />
            <img src="saumya.png" alt="" className="i" />
            <img src="anjali.png" alt="" className="i" />
            <img src="yash.png" alt="" className="ii" />
          </div>
        </div>
      </div>
    </>
  );
}
