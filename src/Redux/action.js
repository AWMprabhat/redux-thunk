import axios from 'axios';
import * as types from './actionType';


const getTodoRequest = ()=>{
    return{
        type: types.GET_TODOS_REQUEST
    }
 }


const getTodoSuccess = (payload)=>{
    return{
        type: types.GET_TODOS_SUCCESS,
        payload
    }
 }


const getTodoFailuer = ()=>{
    return{
        type: types.GET_TODOS_FAILUER
    }
 }




 function getTodos(dispatch){

    // dispatch(getTodoRequest())


    axios
    .get("/todos")
    .then((r)=>dispatch(getTodoSuccess(r.data)))
    .catch((err)=>dispatch(getTodoFailuer(err)))
};

 

 const addTodoRequest = ()=>{
    return{
        type: types.ADD_TODOS_REQUEST
    }
 }


const addTodoSuccess = (payload)=>{
    return{
        type: types.ADD_TODOS_SUCCESS,
        payload
    }
 }


const addTodoFailuer = ()=>{
    return{
        type: types.ADD_TODOS_FAILUER
    }
 }

 export{
    getTodoRequest,
    getTodoSuccess,
    getTodoFailuer,
    getTodos,
    addTodoFailuer,
    addTodoRequest,
    addTodoSuccess
 }