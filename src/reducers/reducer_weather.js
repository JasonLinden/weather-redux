import { FETCH_WEATHER } from "../actions/index";

export function weatherReducer(state = [], action) { // <-- initial state of an empty array
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; // <-- return a new instance of state. [city, city, city];
            break;

        default:
            return state;
            break;
    }
    return state;
};