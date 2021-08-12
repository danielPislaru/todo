import React from "react";
import {
  makeStyles,
  Paper,
  TextField,
  Tooltip,
  IconButton,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: "20px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: `${theme.palette.primary.light} !important`,
  },
  notchedLabel: { color: `${theme.palette.primary.light} !important` },
  customInput: { marginRight: "10px" },

  statusContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
}) => {
  const classes = useStyles();

  const inputTextHandler = (e) => {
    let value = e.target.value;
    setInputText(value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setInputText("");
    setTodos([...todos, { name: inputText, completed: false, id: uuidv4() }]);
  };

  const onStatusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <Paper className={classes.form} elevation={0}>
        <form className={classes.formContainer} onSubmit={submitTodoHandler}>
          <TextField
            className={classes.customInput}
            label='To do name'
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
            InputLabelProps={{
              className: classes.notchedLabel,
            }}
            fullWidth
            name='name'
            rowsmin={2}
            maxRows={4}
            variant='outlined'
            size='small'
            onChange={inputTextHandler}
            value={inputText}
          />
          <Tooltip title='Add'>
            <IconButton
              aria-label='move'
              color='secondary'
              type='submit'
              disabled={!inputText.length}>
              <Add fontSize='small' />
            </IconButton>
          </Tooltip>
        </form>
      </Paper>
      <Box m='10px 4px'>
        <RadioGroup
          className={classes.statusContainer}
          aria-label='status'
          name='status'
          value={status}
          row
          defaultValue='top'
          onChange={onStatusHandler}>
          <FormControlLabel
            value='all'
            control={<Radio color='secondary' size='small' />}
            label='All'
            labelPlacement='bottom'
          />
          <FormControlLabel
            value='completed'
            control={<Radio color='secondary' size='small' />}
            label='Done'
            labelPlacement='bottom'
          />
          <FormControlLabel
            value='uncompleted'
            control={<Radio color='secondary' size='small' />}
            label='Progress'
            labelPlacement='bottom'
          />
        </RadioGroup>
      </Box>
    </>
  );
};

export default Form;
