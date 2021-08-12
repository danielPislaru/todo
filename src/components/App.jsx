import React, { useState, useEffect } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "60%",
    height: "calc(100vh - 200px)",
    padding: "10px 15px",
    transform: "translate(-50%,-50%)",
    background: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveTasksToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const loadTasksFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  
  useEffect(() => {
    filterHandler();
    saveTasksToLocalStorage();
  }, [todos, status]);


  return (
    <Paper className={classes.main}>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </Paper>
  );
};
export default App;
