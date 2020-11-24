import { INPUT_CHANGE } from "../types/ActionTypes";

export function inputValue(state = [], action) {
  switch (action.type) {
    case INPUT_CHANGE: {
      return {
        ...state.input,
        inputValue: action.text,
      };
    }

    default:
      return state;
  }
}
