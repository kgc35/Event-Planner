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

    if (event.cost === 0) {
      event.cost = "Free";
    }
    return (
      <div class="container">
        <div>
          {!joined ? (
            <button
              className="btn btn-lg btn-primary"
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
              className="btn btn-lg btn-danger"
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
          &nbsp;
          <button
            className="btn btn-lg btn-success"
            onClick={() => this.props.history.push("/")}
          >
            Back
          </button>
          <h1 className="display-3 my-4">{event.name}</h1>
          <div class="row">
            <div class="col-md-6">
              <img
                className="img-fluid"
                src={event.event_img}
                alt="event image"
              />
            </div>
            <div class="col-sm-8 col-md-5 col-lg-6 mx-auto">
              <div className="border-0 border-light-sm shadow-sm rounded-3">
                <div className="card-body p-0 p-sm-4">
                  <p className="image-txt-container">
                    <h3 className="my-3 mx-3">Description:</h3>
                    <span className="h5">{event.description}</span>
                  </p>
                  <br />
                  <p className="image-txt-container">
                    <h3 className="my-3 mx-3">Location:</h3>
                    <span className="h5">{event.location}</span>
                  </p>
                  <br />
                  <p className="image-txt-container">
                    <h3 className="my-3 mx-3">Date & Time:</h3>
                    <span className="h5">{event.nice_timestamp}</span>
                  </p>
                  <br />
                  <p className="image-txt-container">
                    <h3 className="my-3 mx-3">Cost:</h3>
                    <span className="h5">{event.cost} </span>
                  </p>
                </div>
              </div>
            </div>
            <h3 class="my-4 display-6">Attending Users</h3>
            <div className="row">
              {event.attending_users.map((user, index) => {
                return <UserCard user={user} key={index} event={event} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
