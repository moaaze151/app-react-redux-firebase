import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function Details() {
  
  const projects = useSelector((state) => state.projectReducer.projects);
  const { id } = useParams();
  const project = projects.find(e => e.id === id)

  return (
    <div
      className="project-details container mt-5"
      style={{ minHeight: "95vh" }}
    >
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Title- {project.title}</h5>
          <p className="card-text">
           {project.content}.
          </p>
        </div>
      </div>
      <div className="text ps-3">
        <p style={{ color: "#999" }}>
          Posted by MoaazDv
          <br />
          21//09/2021
        </p>
      </div>
    </div>
  );
}
