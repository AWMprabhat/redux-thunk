import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailuer,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/action";
import { getTodos } from "../Redux/action";




const TodosInput = () => {
  const dispatch = useDispatch();
  const [title, settitle] = useState("");

  const handleAdd = () => {
    const payload = {
      title,
      status: false,
    };
    settitle("");
    dispatch(addTodoRequest());
    axios
      .post("/todos", payload)
      .then((r) => dispatch(addTodoSuccess()))
      .then(()=>getTodos(dispatch))
      
      .catch((err) => dispatch(addTodoFailuer(err)));
      
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default TodosInput;
