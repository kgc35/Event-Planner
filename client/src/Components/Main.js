import React, { Component } from "react";
import Event from "./Event";
import EventForm from "./EventForm";

class Main extends Component {
  render() {
    if (this.props.id === 0) {
      this.props.history.push("/login");
    }
    return (
      <body className="text-center">
        <h1 class="display-3 text-center"> Home Page </h1>
        <div className="col-sm-8 col-md-4 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <EventForm
                id={this.props.id}
                createEvent={this.props.createEvent}
              />
            </div>
          </div>
        </div>
        <div class="container mt-4 mb-5">
          <div className="row ">
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
      </body>
    );
  }
}

export default Main;
