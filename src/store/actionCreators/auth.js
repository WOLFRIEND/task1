import * as actionTypes from "store/actionTypes";
import { api } from "api";

export const signIn = (form) => async (dispatch) => {
  const { data } = await api.post("/validate", form);

  if (data.status === "ok") {
    dispatch({ type: actionTypes.SIGN_IN_SUCCESS, payload: data });
  } else if (data.status === "err") {
    dispatch({
      type: actionTypes.SIGN_IN_FAIL,
      payload: data,
    });
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({ type: actionTypes.SIGN_OUT, payload: null });
};

// export function signIn({ email, password }) {
//     return async dispatch => {
//         try {
//             dispatch({ type: actionTypes.SIGN_IN_START });
//             const userInfo = await AuthService.signIn(email, password);
//             const themeType = await ThemeService.getTheme(userInfo.user.uid);
//             dispatch({
//                 type: actionTypes.SIGN_IN_SUCCESS,
//                 user: userInfo.user,
//                 themeType
//             });
//         } catch (e) {
//             dispatch(authError(e.message));
//         }
//     };
// }
