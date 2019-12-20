/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import config from "../config/config";
import "./Nav.css";

const SignedIn = () => {
  return (
    <nav>
      <div className="container">
        <ul className="right" style={{ listStyle: "none" }}>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Addpost"
              style={{ textDecoration: "none", color: "white" }}
            >
              Addpost
            </Link>
          </li>
          <li>
            <Link
              to="/person"
              style={{ textDecoration: "none", color: "white" }}
            >
              Person Deatils
            </Link>
          </li>
          <li
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer"
            }}
          >
            <a
              onClick={() => {
                config
                  .auth()
                  .signOut()
                  .then(() => {
                    console.log("signout sucessfull");
                  });
              }}
            >
              signout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default SignedIn;
