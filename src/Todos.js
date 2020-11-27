import React from "react";
import { Todo } from "./Todo";

export function Todos({ todos, filter, toggle, edit, removeTodo }) {
  return (
    <ul className="todo-list">
      {todos
        .filter((todo) => {
          if (filter === "active") {
            return !todo.completed;
          }

          if (filter === "completed") {
            return todo.completed;
          }

          return true;
        })
        .map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              toggle={toggle}
              edit={edit}
              removeTodo={removeTodo}
            />
          );
        })}
    </ul>
  );
}
