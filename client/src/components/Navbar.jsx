import React, { useContext } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=wordpress">
            <h6>WORDPRESS</h6>
          </Link>
          <Link className="link" to="/?cat=react">
            <h6>REACT</h6>
          </Link>
          <Link className="link" to="/?cat=javascript">
            <h6>JAVASCRIPT</h6>
          </Link>
          <Link className="link" to="/?cat=php">
            <h6>PHP</h6>
          </Link>
          <Link className="link" to="/?cat=python">
            <h6>PYTHON</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
