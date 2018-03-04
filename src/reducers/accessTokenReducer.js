import { ACCESS_TOKEN, LOGGED_OUT } from "../actions/types";

export default function accessTokenReducer ( state = null, action ) {
    switch (action.type) {
      case ACCESS_TOKEN:
        return action.payload.data.accessToken;
      case LOGGED_OUT:
        return null;
      default:
        return state;
    }
  };