import React from "react";

import { Filters } from "./Filters";

export function Actions({ todos, filter, setFilter, clearCompleted }) {
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completeCount = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <span className="todo-count">
        <strong>{activeCount}</strong> items left
      </span>
      <Filters filter={filter} setFilter={setFilter} />
      {completeCount > 0 && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </>
  );
}
