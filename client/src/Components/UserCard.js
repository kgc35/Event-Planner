import React, { Component } from "react";

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export default class UserCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <div className="col-md-2">
            <img
              className="img img-rounded img-fluid"
              src={this.props.user.profile_img}
            />
          </div>
          <p className="float-left">
            <strong>Username: </strong> {this.props.user.username}
          </p>
          {/* {this.props.loginUser.id === this.props.recommendation.user ? (
            <div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() =>
                  this.props.removeReview(this.props.recommendation)
                }
              >
                Delete
              </button>
            </div>
          ) : null} */}
        </div>
      </div>
    );
  }
}
