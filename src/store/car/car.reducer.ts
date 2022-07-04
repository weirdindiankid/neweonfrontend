import { CarActionTypes } from "./car.types";

const INITIAL_STATE = {
    cars: [],
    loading: false,
};

const carReducer = (state = INITIAL_STATE, action: { type: any; }) => {
    switch (action.type) {
        case CarActionTypes.FETCH_CARS:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};

export default carReducer;
