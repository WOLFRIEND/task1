import * as actionTypes from "store/actionTypes";
import { ErrorHandler } from "helpers/error-handler";

export const INITIAL_STATE = {
  user: null,
  message: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload };
    case actionTypes.FETCH_USER_FAIL:
      console.dir(action);
      return {
        ...state,
        user: null,
        message: new ErrorHandler(action.payload).process().message,
      };
    default:
      return state;
  }
};
