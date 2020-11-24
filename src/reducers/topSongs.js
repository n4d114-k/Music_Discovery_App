import { FETCH_DATA_SUCCESS } from "../types/ActionTypes";

export function topSongs(state = [], action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...action.topSongs,
        tracks: action.topSongs.tracks.track,
      };

    default:
      return state;
  }
}
