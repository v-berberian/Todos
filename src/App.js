import React from "react";
import "./styles.css";

import { ToggleAll } from "./ToggleAll";
import { AddTodo } from "./AddTodo";
import { Actions } from "./Actions";
import { Todos } from "./Todos";

export default class App extends React.Component {
  state = {
    toggle: false,
    todos: [
      {
        id: 1,
        title: "Todo 1",
        completed: false
      },
      {
        id: 2,
        title: "Todo 2",
        completed: true
      },
      {
        id: 3,
        title: "Todo 3",
        completed: false
      }
    ],
    filter: "all"
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     toggle: false,
  //     todos: [
  //       {
  //         id: 1,
  //         title: "Todo 1",
  //         completed: false
  //       },
  //       {
  //         id: 2,
  //         title: "Todo 2",
  //         completed: true
  //       },
  //       {
  //         id: 3,
  //         title: "Todo 3",
  //         completed: false
  //       }
  //     ],
  //     filter: "all"
  //   };
  // }

  addTodo = (title) => {
    const newTodos = [
      ...this.state.todos,
      {
        id: new Date().getTime(),
        title,
        completed: false
      }
    ];

    this.setState({
      todos: newTodos
    });
  };

  toggleTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newTodos
    });
  };

  toggleAll = (event) => {
    const newTodos = this.state.todos.map((todo) => {
      todo.completed = event.target.checked;
      return todo;
    });

    this.setState({
      toggle: event.target.checked,
      todos: newTodos
    });
  };

  removeTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  editTodo = (id, title) => {
    const newTodos = this.state.todos.map((todo) => {
      if (id === todo.id) {
        // return {
        //   ...todo,
        //   title,
        // }
        todo.title = title; //TODO: mutable data
      }
      return todo;
    });
    this.setState({
      todos: newTodos
    });

    console.log(id, title, newTodos);
  };

  clearCompleted = () => {
    const newTodos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({
      todos: newTodos,
      filter: "all",
      toggle: false
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo addTodo={this.addTodo} />
        </header>
        <section className="main">
          <ToggleAll toggle={this.state.toggle} onChange={this.toggleAll} />
          <Todos
            todos={this.state.todos}
            filter={this.state.filter}
            toggle={this.toggleTodo}
            edit={this.editTodo}
            removeTodo={this.removeTodo}
          />
        </section>
        {this.state.todos.length > 0 && (
          <footer className="footer">
            <Actions
              todos={this.state.todos}
              filter={this.state.filter}
              setFilter={(filter) =>
                this.setState({
                  filter
                })
              }
              clearCompleted={this.clearCompleted}
            />
          </footer>
        )}
      </section>
    );
  }
}
