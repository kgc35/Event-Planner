import React, { Component } from "react";

export default class EventForm extends Component {
  state = {
    name: "",
    time: "",
    location: "",
    cost: "",
    description: "",
    event_img: "",
    user_id: "",
    public: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    state = {
      name: "",
      time: "",
      date: "",
      location: "",
      cost: "",
      description: "",
      event_img: "",
      user_id: "",
      public: true,
    };

    let newEvent = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      location: this.state.location,
      cost: this.state.cost,
      description: this.state.description,
      event_img: this.state.img,
      user_id: this.props.id,
    };
    this.props.createEvent(newEvent);
    this.props.handleClick(); //this is to toggle the form.
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
            type="text"
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
