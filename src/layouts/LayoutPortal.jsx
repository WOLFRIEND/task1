import "./LayoutPortal.scss";
import { Navbar } from "../components/Navbar/Navbar";
export const LayoutPortal = ({ children }) => {
  return (
    <div className="layout-portal">
      <div className="layout-portal__menu">
        <Navbar />
      </div>
      <div className="layout-portal__body">{children}</div>
    </div>
  );
};
