import React, { useReducer } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CustomReducer = () => {
  const intialCount = 0;
  const handleReducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  };
  const handleIncrement = () => {
    return {
      type: INCREMENT,
    };
  };
  const handleDecrement = () => {
    return {
      type: DECREMENT,
    };
  };
  const [count, dispatchCount] = useReducer(handleReducer, intialCount);
  return (
    <div>
      <h2>counter = {count}</h2>
      <button onClick={() => dispatchCount(handleIncrement())}>
        Click INCREMENT
      </button>
      <button onClick={() => dispatchCount(handleDecrement())}>
        Click DECREMENT
      </button>
    </div>
  );
};

export default CustomReducer;
