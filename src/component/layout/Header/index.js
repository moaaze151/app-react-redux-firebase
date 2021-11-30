import React from "react";
import { NavLink } from "react-router-dom";
import SignedInLink from "../SignedInLinks";
import SignedOutLink from "../SingedOutLink";
import { useSelector } from "react-redux";

function Header() {
  const hasLogged = useSelector((state) => state.authReducer.login);

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark py-3">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Mo3azDS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {hasLogged === false ? <SignedOutLink /> : <SignedInLink />}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
