import React, { useState } from "react";

export function AddTodo(props) {
  const { addTodo } = props;
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      className="new-todo"
      placeholder="What needs to be done?"
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" && event.target.value) {
          const title = event.target.value;

          console.log(title);

          addTodo(title);
          setValue("");
        }
      }}
    />
  );
}
