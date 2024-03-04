import "./App.scss";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const App = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  // // Hide navbar on the login page
  // if (location.pathname === '/') {
  //   setShowNavbar(false);
  // } else {
  //   setShowNavbar(true);
  // }
  useEffect(() => {
    if (location.pathname === "/") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container">
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
