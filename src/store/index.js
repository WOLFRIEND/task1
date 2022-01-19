import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "store/reducers/auth";
import { userReducer } from "store/reducers/user";
import { newsReducer } from "store/reducers/news";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    news: newsReducer,
  },
});
