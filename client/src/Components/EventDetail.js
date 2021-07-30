import React, { Component } from "react";
import UserCard from "./UserCard";

export default class EventDetail extends Component {
  render() {
    let event = this.props.selectedEvent;

    return (
      <div class="container py-4 my-4 mx-auto d-flex flex-column">
        <div>
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
                <div class="card">
                  <div class="card-body">
                    <p className="clearfix">
                      <UserCard
                        user={user}
                        key={index}
                        // loginUser={this.props.loginUser[0]}
                        // removeReview={this.props.removeReview}
                      />
                    </p>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
