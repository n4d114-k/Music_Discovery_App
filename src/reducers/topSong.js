import { FETCH_DATA_SUCCESS } from "../types/ActionTypes";

export function topSong(state = [], action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...action.topSong,
        tracks: action.topSong.tracks.track,
      };

    default:
      return state;
  }
}
