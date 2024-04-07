import React from "react";
import { NavLink } from "react-router-dom";
import Register from "./Register";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

export default function Navbar() {
  const {logout} = useAuth0();
  return (
    <>
       <nav className="navbar">
        <div className="d-flex  outer justify-content-around align-item-center">
          <div className="left">
            <NavLink to="#" className="nav-link ">
              <strong
                style={{ color: "red", fontSize: "25px", marginLeft: "30px" }}
              >
                CI
              </strong>
            </NavLink>
          </div>
          <div className="mid ">
            <ul className="even ">
              <li className="nav-item" style={{fontSize: '20px'}}>
                <NavLink to="/page2" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item" style={{fontSize: '20px'}}>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>

              <li className="nav-item" style={{fontSize: '20px'}}>
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="right">
            <button className="btn btn-primary" onClick={logout}>LOG OUT</button>
          </div>
        </div>
      </nav>
    </>
  );
}