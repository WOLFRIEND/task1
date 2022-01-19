import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserById } from "store/actionCreators/user";

import "components/Profile/Profile.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const user = useSelector((state) => state.user.user);
  const message = useSelector((state) => state.user.message);

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [userId]);

  useEffect(() => {}, [message]);

  const userLanguages = useCallback(() => {
    return user.languages.map((language, index) => {
      return <li key={index}>{language}</li>;
    });
  }, [user]);

  const userLinks = useCallback(() => {
    return user.social.map((link) => {
      return (
        <a href={link.link} target="_blank">
          <li key={link.label}>{link.label}</li>
        </a>
      );
    });
  }, [user]);

  if (user) {
    return (
      <div className="user">
        <div className="user__section">
          <p className="user__item">City: {user.city}</p>
        </div>

        <div className="user__section">
          <p className="user__item">Languages:</p>
          <ul className="user__list">{userLanguages()}</ul>
        </div>

        <div className="user__section">
          <p className="user__item">Links:</p>
          <ul className="user__list">{userLinks()}</ul>
        </div>
      </div>
    );
  } else if (!user && message) {
    return (
      <div className="user__section">
        <p className="user__item">{message}</p>
      </div>
    );
  }
  return (
    <div className="user__section">
      <p className="user__item">Loading...</p>
    </div>
  );
};
