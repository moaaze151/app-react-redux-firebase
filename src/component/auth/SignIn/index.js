import { useState, useEffect, useRef } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../../firebase/firebase";
import {
  doc,
  getDoc,
  updateDoc,
  // collection,
  // getDocs,
} from "firebase/firestore";

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();

  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authEmail = useSelector((state) => state.authReducer.email);

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
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // dispatch({type: "LOGIN", });
        const washingtonRef = doc(db, "users", email);
        updateDoc(washingtonRef, {
          login: true,
        });
        // dispatch({
        //   type: "LOG",
        //   payload: [true,email],
        // });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="container mt-5" style={{ minHeight: "85vh" }}>
      <h2 className="text-center mb-4" style={{ color: "#333" }}>
        Sign In
      </h2>
      <form
        className="mx-auto"
        style={{ maxWidth: "540px" }}
        onSubmit={(e) => submitting(e)}
      >
        <div className="">
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
        <div className="mb-3 my-3">
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

        <button type="submit" className="btn btn-primary px-3" ref={btnRef}>
          LOGIN
        </button>
      </form>
    </div>
  );
}
export default SignIn;
