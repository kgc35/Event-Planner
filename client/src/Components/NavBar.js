import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div
        id="navbar-div"
        className="d-flex flex-column flex-md-row justify-content-center align-items-center p-3 px-md-4 mb-3 border-bottom border-dark shadow-sm"
      >
        <img
          className="navbar-logo"
          src="https://icons.iconarchive.com/icons/martz90/circle/512/calendar-icon.png"
          height="35"
          alt="logo"
        />
        <h5 className="my-0 mr-md-auto font-weight-bolder text-light">
          Event Planner
        </h5>
        <nav className="navbar navbar-expand-lg  my-2 my-md-0 mr-md-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav justify-content-center">
              <Link className="p-2 text-light text-decoration-none" to="/">
                Home
              </Link>

              <Link className="p-2 text-light text-decoration-none" to="/rsvps">
                RSVPs
              </Link>
            </ul>
            {this.props.id > 0 ? (
              <>
                <img
                  className="navbar-logo rounded-circle"
                  src={this.props.profile_img}
                  height="35"
                  alt="logo"
                />
                <span className="p-2 text-light">{this.props.username}</span>
                <div class="navbar-nav ml-auto">
                  <Link
                    className="btn-sm btn-danger text-decoration-none"
                    to="/login"
                    onClick={() => this.props.handleLogout(this.props)}
                  >
                    Log out
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </nav>
      </div>
    );
  }
}
