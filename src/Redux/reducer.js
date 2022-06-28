import * as types from "./actionType";

const InitialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TODOS_FAILUER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


      case types.ADD_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    case types.ADD_TODOS_FAILUER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default reducer;
