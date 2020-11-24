import { combineReducers } from "redux";

import { topSong } from "./topSong";
import { artistDetails } from "./artistDetails";
import { inputValue } from "./input";
import { isLoading } from "./isLoading";
import { hasErrored } from "./hasErrored";

const rootReducer = combineReducers({
  topSong,
  artistDetails,
  inputValue,
  isLoading,
  hasErrored,
});

export default rootReducer;
