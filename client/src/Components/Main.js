import React, { Component } from "react";

class Main extends Component {
  search = () => {
    fetch(
      "https://api.setlist.fm/rest/1.0/search/artists?artistName=The%20beatles&p=1&sort=relevance",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "h_eO_nOisDLZE5PdACjPEXFeiCi7elKw6sNc",
        },
      }
    ).then((res) => {
      console.log(res);
    });
  };

  render() {
    if (this.props.loggedinUser.length === 0) {
      this.props.history.push("/login");
    } else {
      let fav_artists = this.props.loggedinUser[0].fav_artists;
    }

    this.search();
    return (
      <div className="container-page">
        <div className="main">
          {/* {fav_artists.map((eventObj) => (
            <div
              className="event"
              onClick={() => this.props.selectEvent(eventObj)}
            >
              <h2> {eventObj.name} </h2>
              <img alt="Event poster" src={eventObj.img} />
              <p>{eventObj.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}

export default Main;
