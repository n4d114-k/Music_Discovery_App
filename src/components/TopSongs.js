import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TopSongs extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    let topSongsURL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=aec5bb397c87e7722a70882e3818e1c1&format=json`;
    this.props.fetchData(topSongsURL, "topSongs");
  }

  renderSongsList = (i) => {

    const { topTracks } = this.props;
    let track = topTracks.tracks;

    return (
      <div className="top-song">
        <strong>{track[i].name}</strong>
        <p>track[i].artist</p>
        <img src={track[i].image[0]['#text']} alt={track[i].artist} />
        <Link to={`/artistinfo/${track[i].artist[0]['name']}`}></Link>
      </div>
    );

  };

  render() {

    if (this.props.hasErrored) {
      return (
        <div>
          <h1> Oops! Couldn't fetch data. </h1>
        </div>
      );
    }

    if (this.props.isLoading) {
      return (
        <div>
          in progress
        </div>
      );
    }

    return (
      <div className="top-songs">
        <h1>TOP SONGS</h1>
        <div className="song">
          {this.props.topTracks.tracks !== undefined
            ? this.props.topTracks.tracks.map((item, index) => {
                return <div key={index}>{this.renderSongsList(index)}</div>;
              })
            : []}
        </div>
      </div>
    );

  }

}

export default TopSongs;
