import { useState, useEffect, useRef } from "react";
import "./style.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../firebase/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [firstName, setFn] = useState("");
  const [lastName, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const fnRef = useRef();
  const lnRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();

  const auth = getAuth();
  const navigate = useNavigate();

  function handleFn(e) {
    if (e.key === "Enter" && firstName !== "") {
      lnRef.current.focus();
    }
  }
  function handleLn(e) {
    if (e.key === "Enter" && lastName !== "") {
      emailRef.current.focus();
    }
  }
  function handleEmail(e) {
    if (e.key === "Enter" && email !== "") {
      passRef.current.focus();
    }
  }
  function handlePass(e) {
    if (e.key === "Enter" && pass !== "") {
      btnRef.current.focus();
    }
  }
   function submitting(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user is :",user);
         setDoc(doc(db, "users",email), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          username: firstName + " " + lastName,
          login: false,
        });
        navigate("/sign-in");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  useEffect(() => {
    fnRef.current.focus();
  }, []);

  return (
    <div className="container mt-4 pb-5" style={{ minHeight: "90vh" }}>
      <h2 className="text-center mb-4" style={{ color: "#333" }}>
        Sign Up
      </h2>
      <form
        className="mx-auto"
        style={{ maxWidth: "540px" }}
        onSubmit={(e) => submitting(e)}
      >
        <div className="mb-3">
          <label htmlFor="firstNm" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstNm"
            aria-describedby="emailHelp"
            ref={fnRef}
            onChange={(e) => setFn(e.target.value)}
            onKeyDown={handleFn}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lastNm" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastNm"
            aria-describedby="emailHelp"
            ref={lnRef}
            onChange={(e) => setLn(e.target.value)}
            onKeyDown={handleLn}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleEmail}
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={passRef}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={handlePass}
          />
        </div>

        <button type="submit" className="btn btn-primary " ref={btnRef}>
          SIGNUP
        </button>
      </form>
    </div>
  );
}
