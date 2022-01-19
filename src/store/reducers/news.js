import * as actionTypes from "store/actionTypes";
import { ErrorHandler } from "helpers/error-handler";

export const INITIAL_STATE = {
  news: null,
  message: null,
};

export const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NEWS_SUCCESS:
      return { ...state, news: action.payload };
    case actionTypes.FETCH_NEWS_FAIL:
      console.dir(action);
      return {
        ...state,
        news: null,
        message: new ErrorHandler(action.payload).process().message,
      };
    default:
      return state;
  }
};
