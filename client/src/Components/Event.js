import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {
  render() {
    let event = this.props.event;
    return (
      <div className="col-md-4">
        <div className="card">
          <img
            className="card-img-top"
            src={event.event_img}
            alt="event"
            onClick={() =>
              this.props.handleSelectEvent(event, this.props)
            }
          />
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">{event.location}</h6>
            <p class="card-text">{event.description}</p>
            <h4 className="card-title">{event.name}</h4>
          </div>
        </div>
      </div>
    );
  }
}
