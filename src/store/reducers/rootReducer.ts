import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { reservationReducer } from '../reservation/reservation.reducer';
export const rootReducer =combineReducers({
   themeReducer,
   reservationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
