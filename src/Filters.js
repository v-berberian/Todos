import React from "react";

export function Filters({ filter, setFilter }) {
  return (
    <ul className="filters">
      <li>
        <a
          href="/"
          className={filter === "all" ? "selected" : ""}
          onClick={(e) => {
            e.preventDefault();
            setFilter("all");
          }}
        >
          All
        </a>
      </li>
      <li>
        <a
          href="/active"
          className={filter === "active" ? "selected" : ""}
          onClick={(e) => {
            e.preventDefault();
            setFilter("active");
          }}
        >
          Active
        </a>
      </li>
      <li>
        <a
          href="/completed"
          className={filter === "completed" ? "selected" : ""}
          onClick={(e) => {
            e.preventDefault();
            setFilter("completed");
          }}
        >
          Completed
        </a>
      </li>
    </ul>
  );
}
