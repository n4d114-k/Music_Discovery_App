import { combineReducers } from "redux";

import { topSongs } from "./topSongs";
import { artistDetails } from "./artistDetails";
import { inputValue } from "./input";
import { isLoading } from "./isLoading";
import { hasErrored } from "./hasErrored";

const rootReducer = combineReducers({
  topSongs,
  artistDetails,
  inputValue,
  isLoading,
  hasErrored,
});

export default rootReducer;
