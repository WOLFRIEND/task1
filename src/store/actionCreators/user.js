import * as actionTypes from "store/actionTypes";
import { api } from "api";

export const getUserById = (id) => async (dispatch) => {
  const { data } = await api.get(`/user-info/${id}`);

  if (data.status === "ok") {
    dispatch({ type: actionTypes.FETCH_USER_SUCCESS, payload: data.data });
  } else if (data.status === "err") {
    dispatch({
      type: actionTypes.FETCH_USER_FAIL,
      payload: data,
    });
  }
};
