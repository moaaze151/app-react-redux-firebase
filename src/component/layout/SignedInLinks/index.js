import React from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export default function SignedInLink() {
  const authEmail = useSelector((state) => state.authReducer.email);
  const navigate = useNavigate();
  const auth = getAuth();

  function logOut() {
    signOut(auth)
      .then(() => {
        const washingtonRef = doc(db, "users", authEmail);
        updateDoc(washingtonRef, {
          login: false,
        });
        navigate("/sign-in");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <li className="nav-item">
        <NavLink to="/new-project" className="nav-link me-2" aria-current="page">
          New Project
        </NavLink>
      </li>
      <li className="nav-item pe-5 mx-2 ">
        <NavLink to="/" className="nav-link text-danger" onClick={logOut}>
          Log Out
        </NavLink>
      </li>
      <li className="nav-item li-nav bg-info ">
        <NavLink to="/" className="btn-nav nav-link">
          {authEmail}
        </NavLink>
      </li>
    </>
  );
}
