import React, { Component } from "react";

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export default class UserCard extends Component {
  render() {
    let hosting = this.props.event.user_id === this.props.user.user_id;
    console.log(hosting);
    return (
      <div className="col-md-2 col-sm-6 mb-4">
        <div class="card">
          <img className="img-fluid" src={this.props.user.profile_img} />
          <div class="card-body">
            <p className="float-left">
              <strong>Username: </strong>
              {capitalizeFirstLetter(this.props.user.username)}
            </p>
            {hosting ? <strong>HOST</strong> : null}
          </div>
        </div>
      </div>
    );
  }
}
