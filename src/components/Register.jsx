import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Register.css";
export default function Register() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="box flex-container justify-content-center">
      <img src="1.png" alt=""  className="bottom-left-img" />
      
        <div className="my-5">
          <h1 className="text2">Welcome to ClearInsight</h1>
        </div>
        <div className="last">
          <button type="button" className="xyz" onClick={loginWithRedirect}>
            Register your account
          </button>
        </div>
        <img className="logoo" src="logo.png" alt="" srcset="" width="300px" height="350px" ></img>
      </div>
    </>
  );
}
