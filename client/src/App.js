import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";

class App extends Component {
  state = {
    users: [],
    artists: [],
    loggedinUser: [],
  };

  componentDidMount() {
    fetch("http://localhost:3292/users")
      .then((res) => res.json())
      .then((users) => {
        fetch("http://localhost:3292/artists")
          .then((res) => res.json())
          .then((artists) =>
            this.setState({
              users: users,
              artists: artists,
            })
          );
      });
  }

  addNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  handleUserLogin = (loginUserObj) => {
    this.setState({
      loggedinUser: loginUserObj,
    });
  };

  handleHomeButton = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="App">
        <NavBar
          handleLogout={this.handleLogout}
          loggedinUser={this.state.loggedinUser}
          handleHomeButton={this.handleHomeButton}
        />

        <Switch>
          <Route
            exact
            path="/login"
            component={(props) => (
              <Login
                {...props}
                handleUserLogin={this.handleUserLogin}
                addNewUser={this.addNewUser}
                users={this.state.users}
              />
            )}
          />
          <Route
            exact
            path="/"
            component={(props) => (
              <Main
                {...props}
                users={this.state.users}
                loggedinUser={this.state.loggedinUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
