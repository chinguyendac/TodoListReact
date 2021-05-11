import React, { useState, useEffect, useRef } from "react";
import PickTime from './PickTime';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'auto',
    color: 'white',
    border: '2px solid #5d0cff',
  },
  labelModify: {
    color: 'white',
    top: 3,
    left: 3
  }
}));

function TodoForm(props) {
  console.log(props);
  const classes = useStyles();
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [time,setTime] = useState(props.edit ? props.edit.time : "07:30");

  const inputRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  //Change Input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //Change Time
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  }

  //Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: time,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue={timeRef}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
              className: classes.labelModify,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={time}
            onChange={handleChangeTime}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add to do"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
              className: classes.labelModify,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            value={time}
            onChange={handleChangeTime}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
    
  );
}

export default TodoForm;
