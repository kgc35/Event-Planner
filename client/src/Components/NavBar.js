import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        {this.props.id > 0 ? (
          <>
            <li className="nav-link">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-link">
              <Link className="nav-link" to="/rsvps">
                RSVPs
              </Link>
            </li>

            <li className="nav-link">
              <p>{this.props.username}</p>
            </li>

            <li className="nav-link">
              <Link
                className="nav-link"
                to="/login"
                onClick={() => this.props.handleLogout(this.props)}
              >
                Log out
              </Link>
            </li>
          </>
        ) : null}
      </nav>
    );
  }
}
