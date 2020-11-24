import { FETCH_ARTIST_DETAIL } from "../types/ActionTypes";

export function artistDetails(state = [], action) {
  switch (action.type) {
    case FETCH_ARTIST_DETAIL:
      return {
        ...action.artistDetails.artist,
      };

    default:
      return state;
  }
}
