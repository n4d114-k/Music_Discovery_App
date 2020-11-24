import React from "react";
import { Link } from "react-router-dom";

class TopSong extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    let topSongURL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=aec5bb397c87e7722a70882e3818e1c1&format=json`;
    this.props.fetchData(topSongURL, "topSong");
  }

  renderSongsElement = (i) => {

    const { topSong } = this.props;
    let track = topSong.tracks;

    return (
      <div className="song">
        <strong>{track[i].name}</strong>
        <Link to={`/artistinfo/${track[i].artist.name}`}><p>{track[i].artist.name}</p></Link>
        <img src={track[i].image[0]['#text']} alt={track[i].artist} />
        <a href={track[i].artist.url}>Last.fm</a>
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
        <h1>TOP 50 SONGS</h1>
        <div className="songs">
          {this.props.topSong.tracks !== undefined
            ? this.props.topSong.tracks.map((item, index) => {
                return <div key={index}>{this.renderSongsElement(index)}</div>;
              })
            : []}
        </div>
      </div>
    );

  }

}

export default TopSong;
