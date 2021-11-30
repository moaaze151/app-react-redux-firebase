import Notifications from "./Notifications";
import List from "../project/List";
import { getAuth } from "firebase/auth";
import { useEffect } from 'react'
import { db } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";


export default function Dashboard() {
 
 const dispatch = useDispatch()
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
    <div
      className="container dashboard pt-3 pb-5"
      style={{ minHeight: "95vh" }}
    >
      <div className="row">
        <div className="col-6">
          <List />
        </div>
        <div className="col-6">
          <Notifications />
        </div>
      </div>
    </div>
  );
}

// <div class="col-6">
//   <div class="p-3 border bg-light">Custom column padding</div>
// </div>
// <div class="col">
//   <div class="p-3 border bg-light">Custom column padding</div>
// </div>
// <div class="col">
//   <div class="p-3 border bg-light">Custom column padding</div>
// </div>
