import React, { Component } from "react";
import Event from "./Event";

class RSVPview extends Component {
  render() {
    if (this.props.id === 0) {
      this.props.history.push("/login");
    }

    //need to filter for events that I RSVPed to, but not host.
    // filtered_events = this.props.all_events.filter((event) => event !== )
    return (
      <div class="container container mt-4 mb-5">
        <h3 class="display-4 text-center"> My RSVPs </h3>
        {this.props.RSVPevents.map((rsvp) => {
          return (
            <Event
              key={rsvp.id}
              event={rsvp.event}
              handleSelectEvent={this.props.handleSelectEvent}
            />
          );
        })}

        <h3 class="display-4 text-center"> My Hosted Events </h3>

        <div className="row">
          {this.props.hosted_events.map((event) => {
            return (
              <Event
                key={event.id}
                event={event}
                handleSelectEvent={this.props.handleSelectEvent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default RSVPview;
