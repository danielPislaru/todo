import React from "react";
import {
  makeStyles,
  Box,
  Paper,
  Tooltip,
  IconButton,
  Typography,
} from "@material-ui/core";

import { Done, DeleteOutline, Restore } from "@material-ui/icons";
import cx from "classnames";

const useStyles = makeStyles((theme) => ({
  todo: {
    marginBottom: "10px ",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    "&.completed": {},
  },
  completed: {
    "& .MuiTypography-subtitle1": {
      color: "red",
      textDecoration: "line-through",
      opacity: 0.5,
    },
  },

  actionsContainer: {
    width: "70px",
    display: "flex",
    justifyContent: "space-between",
  },
  btnSucces: {
    color: theme.palette.feedback.success,
  },
  btnClear: {
    color: theme.palette.feedback.failed,
  },
}));

const Todo = ({ name, completed, id, todos, setTodos, todo }) => {
  const onCompleteHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const onDeleteteHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const classes = useStyles();
  return (
    <Paper
      className={
        !todo.completed ? classes.todo : cx(classes.todo, classes.completed)
      }>
      <Typography variant='subtitle1'>{name}</Typography>
      <Box className={classes.actionsContainer}>
        <Tooltip title='Done'>
          <IconButton
            onClick={onCompleteHandler}
            aria-label='move'
            color={completed ? `secondary` : `primary`}
            className={!completed ? classes.btnSucces : classes.btnRestore}>
            {!completed ? (
              <Done fontSize='small' />
            ) : (
              <Restore fontSize='small' />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title='Delete'>
          <IconButton
            onClick={onDeleteteHandler}
            aria-label='move'
            color='primary'
            className={classes.btnClear}>
            <DeleteOutline fontSize='small' />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};
export default Todo;
