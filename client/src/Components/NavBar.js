import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>Concert Setlists</h1>

        {this.props.loggedinUser.length > 0 ? (
          <>
            <h3 className="navbar-btn" onClick={this.props.handleHomeButton}>
              Home
            </h3>

            <h3>Favorite Artists</h3>
            <h4>{this.props.loggedinUser[0].username}</h4>

            <button
              className="navbar-btn"
              onClick={() => this.props.handleLogout(this.props)}
            >
              Log out
            </button>
          </>
        ) : null}
      </div>
    );
  }
}
