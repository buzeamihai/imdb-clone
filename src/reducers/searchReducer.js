import { SEARCH_MOVIE } from "../actions/types";



export default function searchReducer(state = [], action) {
    

    switch (action.type) {
        case SEARCH_MOVIE:
            console.log(action.payload);

            return (action.payload.data);
        default:
            return state;
    }
}