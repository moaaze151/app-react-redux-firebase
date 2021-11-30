import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

function CreateProject() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const titleRef = useRef();
  const contentRef = useRef();
  const btnRef = useRef();

  function handleTitle(e) {
    if (e.key === "Enter" && title !== "") {
      contentRef.current.focus();
    }
  }
  function handleContent(e) {
    if (e.key === "Enter" && content !== "") {
      btnRef.current.focus();
    }
  }
  async function submitting(e) {
    e.preventDefault();
    await addDoc(collection(db, "projects"), {
      data: { title: title, content: content },
    });
    setTitle("");
    setContent("");
    titleRef.current.focus();
  }
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  return (
    <div className="container mt-4 pb-5"  style={{ minHeight: "88vh" }}>
      <h2 className="text-center mb-4" style={{ color: "#555" }}>
        Create New Project
      </h2>
      <form
        className="mx-auto"
        style={{ maxWidth: "540px" }}
        onSubmit={(e) => submitting(e)}
      >
        <div className="">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleTitle}
          />
        </div>
        <div className="mb-3 my-3">
          <label htmlFor="content" className="form-label">
            Project Content
          </label>
          <textarea
            className="form-control"
            id="content"
            cols="30"
            rows="7"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ref={contentRef}
            onKeyDown={handleContent}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary px-3" ref={btnRef}>
          Create
        </button>
      </form>
    </div>
  );
}
export default CreateProject;
