// import axios from 'axios'
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodosInput from '../components/TodosInput'
import {
  getTodoFailuer,
  getTodoRequest,
  getTodoSuccess,
  getTodos,
} from "../Redux/action";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  // const getTodos = () =>{
  //     dispatch(getTodoRequest())
  //     axios
  //     .get("/todos")
  //     .then((r)=>dispatch(getTodoSuccess(r.data)))
  //     .catch((err)=>dispatch(getTodoFailuer(err)))
  // };

  useEffect(() => {
    if (todos?.length === 0) {
      dispatch(getTodos());
      //    getTodos(dispatch);
    }
  }, []);
  console.log(todos);
  return (
    <div>
      Todos
      <h3>todos</h3>
      <TodosInput />
      {todos?.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default Todos;
