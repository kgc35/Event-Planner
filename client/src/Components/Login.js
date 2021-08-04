import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    signupUsername: "",
    signupPassword: "",
    signupEmail: "",
    signupProfile_img: "",
  };

  handleLogin = (e) => {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,
    };

    fetch("http://localhost:3292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      res.json().then((data) => {
        if (data.id) {
          alert(`Welcome back ${data.username}`);
          this.props.handleUserLogin(data);
          this.props.history.push("/");
        } else {
          alert(data.error);
        }
      });
    });
  };

  handleSignup = (e) => {
    e.preventDefault();
    let newUser = {
      username: this.state.signupUsername,
      email: this.state.signupEmail,
      password: this.state.signupPassword,
      profile_img: this.state.signupProfile_img,
    };

    fetch("http://localhost:3292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      res.json().then((data) => {
        if (data.id) {
          alert("You can now log in");
        } else {
          alert(data.errors.join("\n"));
        }
      });
    });
  };

  render() {
    return (
      <body className="text-center">
        <h1>Welcome</h1>
        <main className="form-signin">
          <form className="login" onSubmit={(e) => this.handleLogin(e)}>
            <label>
              <h1 className="h3 mb-3 fw-normal">Log In </h1>
              <div className="form-floating">
                <input
                  id="floatingInput"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={(e) =>
                    this.setState({
                      username: e.target.value.toLowerCase(),
                    })
                  }
                />
              </div>
              <div className="form-floating">
                <input
                  id="floatingPassword"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(e) =>
                    this.setState({
                      password: e.target.value,
                    })
                  }
                />
              </div>
            </label>
            <p className="login-input">
              <input className="login-btn" type="submit" value="Log In" />
            </p>
          </form>
          <form className="signup" onSubmit={(e) => this.handleSignup(e)}>
            <label>
              <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
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
              <p className="login-input">
                <input
                  type="profile_img"
                  placeholder="Profile Image Link"
                  value={this.state.signupProfile_img}
                  onChange={(e) =>
                    this.setState({
                      signupProfile_img: e.target.value,
                    })
                  }
                />
              </p>
            </label>
            <p className="login-input">
              <input className="signup-btn" type="submit" value="Sign Up" />
            </p>
          </form>
        </main>
      </body>
    );
  }
}
