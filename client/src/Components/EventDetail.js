import React, { Component } from "react";
import UserCard from "./UserCard";

export default class EventDetail extends Component {
  render() {
    if (this.props.id === 0) {
      this.props.history.push("/login");
    }
    let event = this.props.selectedEvent;

    let extract_id = this.props.rsvps.map((rsvp) => rsvp.event_id);
    let joined = extract_id.includes(event.id);

    return (
      <div class="container py-4 my-4 mx-auto d-flex flex-column">
        <div>
          {!joined ? (
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                this.props.createRSVP({
                  user_id: this.props.id,
                  event_id: event.id,
                  accepted: "true",
                })
              }
            >
              Join Event
            </button>
          ) : (
            <button
              className="btn btn-sm btn-primary"
              onClick={() =>
                this.props.deleteRSVP({
                  user_id: this.props.id,
                  event_id: event.id,
                })
              }
            >
              Leave Event
            </button>
          )}
          <button
            className="btn btn-sm btn-primary"
            onClick={() => this.props.history.push("/")}
          >
            Back
          </button>
          <div class="row">
            <h1>{event.name}</h1>
            <div class="col-md-5">
              <img className="image" src={event.event_img} alt="event image" />
            </div>
            <div class="col-md-5">
              <p>Description : {event.description}</p>
              <p>Location : {event.location}</p>
              <p>Date & Time: {event.nice_timestamp}</p>
              <p>Cost: {event.cost}</p>
            </div>
            <div>
              {event.attending_users.map((user, index) => {
                return (
                  <div class="card">
                    <div class="card-body">
                      <UserCard user={user} key={index} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
