import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Todo from "./Todo";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    margin: "10px 0",
    height: "calc(100% - 160px)",
    overflow: "hidden",
    overflowY: "auto",
  },
}));

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const classes = useStyles();
  return (
    <Box className={classes.listContainer}>
      {filteredTodos?.map((todo) => {
        return (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
            id={todo.id}
          />
        );
      })}
      {/*  <Todo todos={todos} /> */}
    </Box>
  );
};

export default TodoList;
