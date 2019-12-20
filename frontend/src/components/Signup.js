import React, { Component } from "react";
import { config } from "./config/config";
export class Signup extends Component {
  state = {
    email: " ",
    password: " "
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    const { email, password } = this.state;
    console.log(this.state);

    config
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("succefully signed up");
      })
      .catch(err => err, "error");
  };
  render() {
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
          <button>SignUp</button>
        </form>
      </div>
    );
  }
}

export default Signup;
