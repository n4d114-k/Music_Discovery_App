import React from "react";
import { Link } from "react-router-dom";

class ArtistDetail extends React.Component {
  fetchArtistData(artistName) {
    let artisitURL = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=aec5bb397c87e7722a70882e3818e1c1&format=json`;
    this.props.fetchData(artisitURL, "artistDetails");
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    let artistName = this.props.match.params.artistName;
    if (artistName !== prevProps.match.params.artistName) {
      this.fetchArtistData(artistName);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let artistName = this.props.match.params.artistName;
    this.fetchArtistData(artistName);
  }

  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  render() {

    let backToHome = (
      <Link className="home-button" to="/">
        Back To Home
      </Link>
    );

    if (this.props.isLoading) {
      return (
        <div>
          in Progress
        </div>
      );
    }

    if (this.props.match.params.artistName === "undefined") {
      return (
        <div>
          {" "}
          {backToHome}
          <h1>Enter Valid Name</h1>
        </div>
      );
    }

    if (this.isEmpty(this.props.artistDetails)) {
      return (
        <div>
          {" "}
          {backToHome}
          <h1>Artist not found</h1>
        </div>
      );
    }

    let bio = this.props.artistDetails.bio
      ? this.props.artistDetails.bio.content
      : null;

    if (bio !== null) {
      let text = bio.split("<");
      bio = text[0];
    }

    let tags = this.props.artistDetails.tags
      ? this.props.artistDetails.tags.tag.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
          </div>
        ))
      : null;

    let image = this.props.artistDetails.image[3]['#text']
      ? this.props.artistDetails.image[3]['#text']
      : null;

    return (
      <div>
        {backToHome}
        <div className="artist-container">
          <div>
            <strong className="artist-name">{this.props.artistDetails.name}</strong>
            <br />
            <img src={image} alt={this.props.artistDetails.name}/>
            <br />
            <div>
              {tags.length !== 0 ? <strong>Tags: </strong> : null}
            <br />
            {tags}
            </div>
            <br />
            <div>
              {bio.length !== 0 ? <strong>Overview: </strong> : null}
              <p>{bio}</p>
            </div>
            <a className="lastfm-profile-button" href={this.props.artistDetails.url}>
              Last.fm profile of {this.props.artistDetails.name}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetail;
