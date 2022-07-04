import { RESERVATION_ACTION_TYPES } from "./reservation.types";

export const RESERVATION_INITIAL_STATE = {
    reservationLocation: null,
};

export const reservationReducer = (
    state = RESERVATION_INITIAL_STATE,
    action: { type: any; payload: any; }
) => {
    switch (action.type) {
        case RESERVATION_ACTION_TYPES.SET_RESERVATION_LOCATION:
            return {
                ...state,
                reservationLocation: action.payload,
            };
        default:
            return state;
    }
};
