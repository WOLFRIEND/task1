import * as actionTypes from "store/actionTypes";
import { api } from "api";

export const getNewsList = () => async (dispatch) => {
  const { data } = await api.get(`/news`);

  if (data.status === "ok") {
    dispatch({ type: actionTypes.FETCH_NEWS_SUCCESS, payload: data.data });
  } else if (data.status === "err") {
    dispatch({
      type: actionTypes.FETCH_NEWS_FAIL,
      payload: data,
    });
  }
};
