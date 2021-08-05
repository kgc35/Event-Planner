import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import EventDetail from "./Components/EventDetail";
import RSVPview from "./Components/RSVPview";

class App extends Component {
  state = {
    id: 0,
    username: "",
    email: "",
    hosted_event_ids: [],
    rsvps: [],
    events: [],
    profile_img: "",
    selectedEvent_id: 0,
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
    this.setState({
      id: data.id,
      username: data.username,
      email: data.email,
      hosted_event_ids: data.hosted_event_ids,
      rsvps: data.rsvps,
      profile_img: data.profile_img,
    });
  };

  handleLogout = () => {
    this.setState({
      id: 0,
      username: "",
      email: "",
      hosted_event_ids: [],
      rsvps: [],
      profile_img: "",
      selectedEvent_id: 0,
    });
  };

  handleSelectEvent = (event) => {
    this.setState({ selectedEvent_id: event.id });
    this.props.history.push("/eventdetails");
  };

  createEvent = (newEvent) => {
    fetch("http://localhost:3292/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);

        if (data.id) {
          this.setState({
            events: [...this.state.events, data],
            hosted_event_ids: [...this.state.hosted_event_ids, data.id],
          });
        } else {
          alert(data.errors.join("\n"));
        }
      });
    });
  };

  createRSVP = (rsvpHash) => {
    fetch("http://localhost:3292/rsvps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rsvpHash),
    }).then((res) => {
      res.json().then((data) => {
        if (data.id) {
          let found_event = this.state.events.find((event) => {
            return event.id === data.event_id;
          });

          let event_copy = {
            ...found_event,
            attending_users: [
              ...found_event.attending_users,
              {
                username: this.state.username,
                profile_img: this.state.profile_img,
              },
            ],
          };
          this.updateSingleEvent(event_copy);
          this.setState({ rsvps: [...this.state.rsvps, data] });
        } else {
          alert(data.errors.join("\n"));
        }
      });
    });
  };

  //now create deleteRSVP
  deleteRSVP = (rsvpHash) => {
    let foundRSVP = this.state.rsvps.filter(
      (rsvp) =>
        rsvp.event_id === rsvpHash.event_id && rsvp.user_id === rsvpHash.user_id
    );
    console.log(foundRSVP[0].id);
    fetch(`http://localhost:3292/rsvps/${foundRSVP[0].id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);

        if (data.id) {
          let found_event = this.state.events.find((event) => {
            return event.id === data.event_id;
          });

          let filtered_users = found_event.attending_users.filter(
            (user) => user.username !== this.state.username
          );

          let event_copy = {
            ...found_event,
            attending_users: filtered_users,
          };
          this.updateSingleEvent(event_copy);

          let filtered_rsvps = this.state.rsvps.filter(
            (rsvp) => rsvp.id !== data.id
          );
          this.setState({ rsvps: filtered_rsvps });
        } else {
          alert(data.errors.join("\n"));
        }
      });
    });
  };

  updateSingleEvent = (event_copy) => {
    let event_copies = this.state.events.map((event) => {
      return event.id === event_copy.id ? event_copy : event;
    });

    this.setState({ events: event_copies });
  };

  render() {
    let hosted_events = this.state.hosted_event_ids.map((event_id) => {
      return this.state.events.find((event) => {
        return event.id === event_id;
      });
    });

    let selectedEvent = this.state.events.find(
      (event) => event.id === this.state.selectedEvent_id
    );

    let filtered_rsvps = this.state.rsvps.filter((rsvp) => {
      return !this.state.hosted_event_ids.includes(rsvp.event_id);
    });

    let RSVPevents = filtered_rsvps.map((rsvp) => {
      let found_event = this.state.events.find(
        (event) => event.id === rsvp.event_id
      );
      return {
        ...rsvp,
        event: found_event,
      };
    });

    return (
      <div className="App">
        <NavBar
          handleLogout={this.handleLogout}
          id={this.state.id}
          username={this.state.username}
          profile_img={this.state.profile_img}
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
                createEvent={this.createEvent}
              />
            )}
          />
          <Route
            exact
            path="/eventdetails"
            component={(props) => (
              <EventDetail
                {...props}
                selectedEvent={selectedEvent}
                id={this.state.id}
                events={this.state.events}
                createRSVP={this.createRSVP}
                deleteRSVP={this.deleteRSVP}
                rsvps={this.state.rsvps}
                hosted_event_ids={this.state.hosted_event_ids}
              />
            )}
          />
          <Route
            exact
            path="/rsvps"
            component={(props) => (
              <RSVPview
                {...props}
                handleSelectEvent={this.handleSelectEvent}
                id={this.state.id}
                hosted_events={hosted_events}
                RSVPevents={RSVPevents}
                all_events={this.state.events}
              />
            )}
          />
        </Switch>
        <footer class="sticky-footer footer border-top border-dark mt-auto py-3">
          <div class="container">
            <div className="row">
              <span class="text-muted"></span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
