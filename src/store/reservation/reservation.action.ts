import { RESERVATION_ACTION_TYPES } from "./reservation.types";
import { createAction } from "../../utils/reducer/reducer.util";

export const setReservationLocation = (reservationLocation: string) => {
    return createAction(
        RESERVATION_ACTION_TYPES.SET_RESERVATION_LOCATION,
        reservationLocation
    );
}
