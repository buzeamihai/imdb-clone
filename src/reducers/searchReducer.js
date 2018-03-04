import { SEARCH_MOVIE } from "../actions/types";



export default function searchReducer(state = null, action) {
    

    switch (action.type) {
        case SEARCH_MOVIE:
            console.log('payload', action.payload);

            return action.payload.data;
        default:
            return state;
    }
}