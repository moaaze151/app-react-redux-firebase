import { useEffect } from "react";
import Summary from "../Summary";
import { useSelector, useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export default function List() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      dispatch({
        type: "CL",
        payload:[]
      });
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        dispatch({
          type: "ADD",
          data: {
            id: doc.id,
            title: doc.data().data.title,
            content: doc.data().data.content,
          },
        });
      });
    }
    fetchData();
  }, []);
  const projects = useSelector((state) => state.projectReducer.projects);
  return (
    <>
      {(projects.length > 0 ) ? (
        projects.map((e) => {
          return <Summary key={e.id} id={e.id} title={e.title} content={e.content} />;
        })
      ) : (
        <h2 className="pt-5 text-center">Loading...</h2>
      )}
    </>
  );
}
