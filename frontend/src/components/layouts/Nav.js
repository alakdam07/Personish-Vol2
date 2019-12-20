import React from "react";
//import { Switch, Route } from "react-router-dom";
import Signed from "./Signed";
import SignedOut from "./SignedOut";
import config from "../config/config";

const Nav = () => {
  const user = config.auth().currentUser;

  const links = user === null ? <Signed /> : <SignedOut />;

  return (
    <div>
      <nav className="nav-wrapper yellow darken-3">
        <div className="container">{links}</div>
      </nav>
    </div>
  );
};
export default Nav;
