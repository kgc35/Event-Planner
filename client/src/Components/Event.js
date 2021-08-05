import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {
  render() {
    let event = this.props.event;
    return (
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src={event.event_img}
            alt="event"
            onClick={() => this.props.handleSelectEvent(event, this.props)}
          />

          <div class="card-body">
            <h5 class="card-subtitle mb-3 text-muted">{event.location}</h5>
            <p class="h5 mb-2 card-text">{event.description}</p>
            <h2 className="card-title">{event.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}
