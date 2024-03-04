import "./navbar.scss";
import { ImHome } from "react-icons/im";
import { FaUser } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // console.log(currentPath);

  return (
    <div className="navbar">
      <div className="navbar-section">
        <div className={currentPath=="/home"?"active":""}></div>
        <Link to="/home">
          <ImHome className="symbol" style={{ left: "98.5px" }} />
        </Link>
      </div>
      <div className="navbar-section">
        <div className={currentPath=="/profile"?"active":""}></div>
        <Link to="/profile">
          <FaUser className="symbol" style={{ right: "97px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
