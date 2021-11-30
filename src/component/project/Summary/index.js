import React from "react";
import { NavLink } from "react-router-dom";
export default function Summary({ title, content, id }) {
  return (
    <NavLink
      to={`project/${id}`}
      style={{ listStyle: "none", textDecoration: "none" }}
    >
      <div className="card mb-3" style={{ width: "18rem", cursor: "pointer" }}>
        <div className="card-body">
          <h5 className="card-title text-dark">{title}</h5>
          <p
            className="card-text text-black-50"
          >
            {content}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
