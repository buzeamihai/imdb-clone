import { LOGGED_OUT } from "../actions/types";

export default function loggedOutReducer ( state = '', action ) {
    switch (action.type) {
      case LOGGED_OUT:     
        return action.payload.data.message;
      default:
        return state;
    }
  };