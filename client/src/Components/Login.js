import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    signupUsername: "",
    signupPassword: "",
    signupEmail: "",
  };

  handleLogin = (e) => {
    e.preventDefault();

    let filteredArray = this.props.users.filter(
      (user) =>
        user.username.toLowerCase() === e.target[0].value.toLowerCase() &&
        user.password === e.target[1].value
    );

    if (filteredArray.length > 0) {
      this.props.handleUserLogin(filteredArray);
      this.props.history.push("/");
      alert(`Welcome back ${filteredArray[0].username}`);
    } else alert("Invalid User. Try Again.");
  };

  handleSignup = (e) => {
    e.preventDefault();
    let newUser = {
      username: this.state.signupUsername,
      email: this.state.signupEmail,
      password: this.state.signupPassword,
    };

    fetch("http://localhost:3292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        console.log(data.user);
        if (data.username) {
          alert("You can now log in");
          this.props.addNewUser(data);
        } else {
          alert(data.errors.join("\n"));
        }
      });
    });
  };

  render() {
    return (
      <div className="forms">
        <form className="login" onSubmit={(e) => this.handleLogin(e)}>
          <label>
            Log In
            <p className="login-input">
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={(e) =>
                  this.setState({
                    username: e.target.value.toLowerCase(),
                  })
                }
              />
            </p>
            <p className="login-input">
              <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={(e) =>
                  this.setState({
                    password: e.target.value,
                  })
                }
              />
            </p>
          </label>
          <p className="login-input">
            <input className="login-btn" type="submit" value="Log In" />
          </p>
        </form>
        <form className="signup" onSubmit={(e) => this.handleSignup(e)}>
          <label>
            Sign Up
            <p className="login-input">
              <input
                type="text"
                placeholder="Username"
                value={this.state.signupUsername}
                onChange={(e) =>
                  this.setState({
                    signupUsername: e.target.value.toLowerCase(),
                  })
                }
              />
            </p>
            <p className="login-input">
              <input
                type="email"
                placeholder="Email address"
                value={this.state.signupEmail}
                onChange={(e) =>
                  this.setState({
                    signupEmail: e.target.value,
                  })
                }
              />
            </p>
            <p className="login-input">
              <input
                type="password"
                placeholder="Password"
                value={this.state.signupPassword}
                onChange={(e) =>
                  this.setState({
                    signupPassword: e.target.value,
                  })
                }
              />
            </p>
          </label>
          <p className="login-input">
            <input className="signup-btn" type="submit" value="Sign Up" />
          </p>
        </form>
      </div>
    );
  }
}
