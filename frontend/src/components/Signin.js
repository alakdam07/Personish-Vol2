import React, { Component } from "react";
import { config } from "../components/config/config";
import { Redirect } from "react-router-dom";
export class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    const { email, password } = this.state;

    config
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("succeful login");
      })
      .catch(err => err, "login failed");
  };

  render() {
    const user = config.auth().currentUser;

    // if (user != null) {
    //   user.providerData.forEach(function(profile) {
    //     console.log("Sign-in provider: " + profile.providerId);
    //     console.log("  Provider-specific UID: " + profile.uid);
    //     console.log("  Name: " + profile.displayName);
    //     console.log("  Email: " + profile.email);
    //     console.log("  Photo URL: " + profile.photoURL);
    //   });
    // }

    if (user != null) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="fields">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              placeholder="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="fields">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <button>Signin</button>
        </form>
      </div>
    );
  }
}

export default Signin;
