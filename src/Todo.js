import React, { useState, useRef, useEffect } from "react";

import classNames from "classnames";

export function Todo({ id, title, completed, toggle, edit, removeTodo }) {
  const [value, setValue] = useState(title);
  const [editing, setEditing] = useState(false);

  const editingRef = useRef();

  // const classNameEditing = editing ? "editing" : "";
  // const classNameCompleted = completed ? "completed" : "";
  // const className = `${classNameCompleted} ${classNameEditing}`;

  useEffect(() => {
    editingRef.current.focus();
  });

  // useEffect(() => {
  //   if (editing) {
  //     document.body.style.backgroundColor = "blue";
  //   } else {
  //     document.body.style.backgroundColor = "red";
  //   }
  // }, [editing]);

  return (
    <li
      className={classNames({
        editing: editing,
        completed: completed
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toggle(id)}
          checked={completed}
        />
        <label
          onDoubleClick={() => {
            if (!completed) setEditing(true);
          }}
        >
          {title}
        </label>
        <button className="destroy" onClick={() => removeTodo(id)}></button>
      </div>
      <input
        ref={editingRef}
        type="text"
        className="edit"
        value={value}
        onBlur={() => {
          setEditing(false);
          edit(id, value);
        }}
        onChange={(e) => setValue(e.target.value)}
      />
    </li>
  );
}
