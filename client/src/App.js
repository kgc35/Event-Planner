import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import EventDetail from "./Components/EventDetail";

class App extends Component {
  state = {
    id: 0,
    username: "",
    email: "",
    hosted_events: [],
    rsvps: [],
    events: [],
    profile_img: "",
    selectedEvent: {},
  };

  componentDidMount() {
    fetch("http://localhost:3292/events")
      .then((res) => res.json())
      .then((events) => {
        this.setState({
          events: events,
        });
      });
  }

  handleUserLogin = (data) => {
    console.log("I was called");
    this.setState({
      id: data.id,
      username: data.username,
      email: data.email,
      hosted_events: data.hosted_events,
      rsvps: data.rsvps,
      profile_img: data.profile_img,
    });
  };

  // handleHomeButton = () => {
  //   this.props.history.push("/");
  // };

  handleLogout = () => {
    this.setState({
      id: 0,
      username: "",
      email: "",
      hosted_events: [],
      rsvps: [],
      profile_img: "",
    });
  };

  handleSelectEvent = (event) => {
    this.setState({ selectedEvent: event });
    this.props.history.push("/eventdetails");
  };

  render() {
    return (
      <div className="App">
        <NavBar
          handleLogout={this.handleLogout}
          id={this.state.id}
          username={this.state.username}
        />

        <Switch>
          <Route
            exact
            path="/login"
            component={(props) => (
              <Login {...props} handleUserLogin={this.handleUserLogin} />
            )}
          />
          <Route
            exact
            path="/"
            component={(props) => (
              <Main
                {...props}
                handleSelectEvent={this.handleSelectEvent}
                id={this.state.id}
                events={this.state.events}
              />
            )}
          />
          <Route
            exact
            path="/eventdetails"
            component={(props) => (
              <EventDetail
                {...props}
                selectedEvent={this.state.selectedEvent}
                id={this.state.id}
                events={this.state.events}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
