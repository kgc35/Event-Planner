import React, { Component } from "react";
import Event from "./Event";

class Main extends Component {
  render() {
    if (this.props.id === 0) {
      this.props.history.push("/login");
    }
    return (
      <div class="container container mt-4 mb-5">
        <h3 class="display-4 text-center"> Home Page </h3>
        <div className="row">
          {this.props.events.map((event) => {
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

export default Main;
