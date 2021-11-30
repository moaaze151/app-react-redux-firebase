import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLink() {
  return (
    <>
      <li className="nav-item">
        <NavLink
          to="/sign-in"
          className="nav-link "
          aria-current="page"
          //   activeStyle={{ color: "red" }}
        >
          Sign In
        </NavLink>
      </li>
      <li className="nav-item ms-3">
        <NavLink to="/sign-out" className="nav-link">
          sign up
        </NavLink>
      </li>
    </>
  );
}
export default SignedOutLink;
