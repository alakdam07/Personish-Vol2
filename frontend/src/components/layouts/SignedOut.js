import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const SignedOut = () => {
  return (
    <nav>
      <div>
        <ul className="right">
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/signin">Signin</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SignedOut;
