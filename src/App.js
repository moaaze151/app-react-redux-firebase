import "./App.css";
import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Dashboard from "./component/dashboard/Dashboard";
import Details from "./component/project/Details";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateProject from "./component/project/Create";

function App() {
  const styleBg = {
    background:
      "url('./img/mario-bg.png') center bottom / 100% no-repeat #95e8f3",
    minHeight: "100%",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        dispatch({
          type: "LOG",
          payload: [doc.data().login,doc.data().email],
        });
      });
    }
    fetchData();
  }, []);

  return (
    <div className="App" style={styleBg}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-out" element={<SignUp />} />
        <Route path="new-project" element={<CreateProject />} />
        <Route path="project/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h1>Sorry, Your Page Not Found</h1>
    </div>
  );
}

export default App;
