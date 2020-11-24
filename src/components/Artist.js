import React from "react";
import { Switch, Route } from "react-router-dom";
import TopSong from "./TopSong";
import ArtistDetail from "./ArtistDetail";

const Artist = (props) => (
  <main>
    <Switch>
      <Route exact path="/" render={() => <TopSong {...props} />} />
      <Route
        exact
        path="/artistInfo/:artistName"
        render={(routeProps) => (
          <ArtistDetail {...{ ...props, ...routeProps }} />
        )}
      />
    </Switch>
  </main>
);

export default Artist;
