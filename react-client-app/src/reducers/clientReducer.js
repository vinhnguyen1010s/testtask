import { ADD_CLIENT, GET_CLIENTS } from './action-types';

export const clientReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CLIENT:
      return [...state, payload];

    case GET_CLIENTS:
      return payload;

    default:
      return state;
  }
};
