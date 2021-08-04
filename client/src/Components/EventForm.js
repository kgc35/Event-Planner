import React, { Component } from "react";

export default class EventForm extends Component {
  state = {
    name: "",
    time: "",
    date: "",
    location: "",
    cost: "",
    description: "",
    event_img: "",
    user_id: "",
    public: "true",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let time = "";
    if (this.state.time !== "" && this.state.date !== "") {
      time = new Date(this.state.date + " " + this.state.time).toISOString();
    }

    let newEvent = {
      name: this.state.name,
      time: time,
      location: this.state.location,
      cost: this.state.cost,
      description: this.state.description,
      event_img: this.state.event_img,
      user_id: this.props.id,
      public: this.state.public,
    };

    this.props.createEvent(newEvent);
    // this.props.handleClick(); //this is to toggle the form.
  };

  render() {
    return (
      <div className="event-form">
        <form className="add-event" onSubmit={this.handleSubmit}>
          <h3>Add an Event</h3>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Event Name"
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="date"
            name="date" //this is the rails variable
            min="2021-07-30"
            max="2021-12-31"
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="time"
            name="time"
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="location"
            placeholder="Event location"
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="number"
            min="0"
            name="cost"
            placeholder="Event Price"
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            placeholder="Event Description"
            className="input-text"
          />
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            name="event_img"
            placeholder="Link to Event Image"
            className="input-text"
          />
          <br />
          <label>
            <input
              type="radio"
              name="public"
              value="true"
              checked={this.state.public === "true"}
              onChange={this.handleChange}
              className="form-check-input"
            />
            True
          </label>
          <label>
            <input
              type="radio"
              name="public"
              value="false"
              checked={this.state.public === "false"}
              onChange={this.handleChange}
              className="form-check-input"
            />
            False
          </label>
          <br />
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="button"
          />
        </form>
      </div>
    );
  }
}
