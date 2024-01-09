const initialCount = { count: 0, todos: [] };
export const Reducer = (state = initialCount, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ADDTEXT":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.id, data: action.payload, completed: false },
        ],
      };
    case "DELETE":
      const ele = state.todos.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        todos: ele,
      };
    case "CHECKED":
      const updatedTodo = state.todos.map((ele) =>
        ele.id === action.id ? { ...ele, completed: action.checked } : ele
      );
      return {
        ...state,
        todos: updatedTodo,
      };
    default:
      return initialCount;
  }
};
