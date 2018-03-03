import { GET_DETAILS } from "../actions/types";

export default function detailsReducer (state = null, action) {
    switch (action.type) {
      case GET_DETAILS:
        return action.payload.data;
      default:
        return state;
    }
  };