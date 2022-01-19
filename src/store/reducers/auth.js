import * as actionTypes from "../actionTypes";
import { ErrorHandler } from "helpers/error-handler";

export const INITIAL_STATE = {
  isLoggedIn: false,
  userId: null,
  message: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, isLoggedIn: true, userId: action.payload.data.id };
    case actionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userId: null,
        message: new ErrorHandler(action.payload).process().message,
      };
    case actionTypes.SIGN_OUT:
      return { ...state, isLoggedIn: false, userId: null, message: null };
    default:
      return state;
  }
};
