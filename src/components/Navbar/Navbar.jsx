import { Link } from "react-router-dom";
import "./Navbar.scss";

import { signOut } from "store/actionCreators/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate(`/`);
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link to="/news">
          <li className="navbar__list-item">News</li>
        </Link>
        <Link to="/profile">
          <li className="navbar__list-item">Profile</li>
        </Link>
      </ul>
      <ul className="navbar__list">
        <button onClick={handleSignOut}>
          <li className="navbar__list-item">Sign-out</li>
        </button>
      </ul>
    </nav>
  );
};
