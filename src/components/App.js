import "../App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "router/PrivateRoute";
import { NotFound } from "router/NotFound";

import { Login } from "./Login/Login";
import { News } from "./News/News";
import { Profile } from "./Profile/Profile";
import { LayoutPortal } from "../layouts/LayoutPortal";

import { useSelector } from "react-redux";

export const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? <Navigate to="/profile" /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/news"
          exact
          element={
            <LayoutPortal>
              <News />
            </LayoutPortal>
          }
        />
        {/*<Route
          path="/profile"
          element={
            <LayoutPortal>
              <Profile />
            </LayoutPortal>
          }
        />*/}
        <Route
          path="/profile"
          element={
            <PrivateRoute
              component={
                <LayoutPortal>
                  <Profile />
                </LayoutPortal>
              }
            />
          }
        />
      </Routes>
    </div>
  );
};
