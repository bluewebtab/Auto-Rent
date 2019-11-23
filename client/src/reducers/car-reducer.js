import {
  FETCH_CARS,
  FETCH_CAR_BY_ID_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT
} from "../actions/types";

const INITIAL_STATE = {
  cars: {
    data: []
  },
  car: {
    data: {}
  }
};

export const carReducer = (state = INITIAL_STATE.cars, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, data: action.cars };

    default:
      return state;
  }
};

export const selectedCarReducer = (state = INITIAL_STATE.car, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_INIT:
      return { ...state, data: {} };
    case FETCH_CAR_BY_ID_SUCCESS:
      return Object.assign({}, state, { data: action.car });
    //return { ...state, data: action.car };

    default:
      return state;
  }
};
