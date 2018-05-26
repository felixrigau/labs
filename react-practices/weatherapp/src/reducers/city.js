import {SET_CITY} from './../actions';

export const city = (state = {}, action) => {
    switch (action) {
        case SET_CITY:
            return {...state, city: action.payload}
        default:
            return state;
    }
}