import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddText,
  CheckedTodo,
  Decrease,
  DeleteTodo,
  Increase,
} from "../actions/Actions";

const CounterBySelector = () => {
  const count = useSelector((state) => state.count);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const AddTodo = () => {
    if (text === "") return;
    const id = parseInt(Math.random() * 1000);
    dispatch(AddText(text, id));
    setText("");
  };
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => dispatch(Increase())}>Increase</button>
      <button onClick={() => dispatch(Decrease())}>Decrease</button>
      <hr />
      <input
        type="text"
        placeholder="enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            AddTodo();
          }
        }}
      />
      <button onClick={AddTodo}>Add Text</button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div style={{ width: "48%" }}>
          <h4>Incomplete Todo</h4>
          {todos.map((ele, ind) => {
            return (
              !ele.completed && (
                <div
                  key={ele + ind}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    background: "silver",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={ele.completed}
                    onChange={(e) =>
                      dispatch(CheckedTodo(ele.id, e.target.checked))
                    }
                  />
                  <p>{ele.id}</p>
                  <h4>{ele.data}</h4>
                  <button onClick={() => dispatch(DeleteTodo(ele.id))}>
                    Delete
                  </button>
                </div>
              )
            );
          })}
        </div>
        <div style={{ width: "48%" }}>
          <h4>Completed Todo</h4>
          {todos.map((ele, ind) => {
            return (
              ele.completed && (
                <div
                  key={ele + ind}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    background: "#8db960",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={ele.completed}
                    onChange={(e) =>
                      dispatch(CheckedTodo(ele.id, e.target.checked))
                    }
                  />
                  <p style={{ textDecoration: "line-through" }}>{ele.id}</p>
                  <h4 style={{ textDecoration: "line-through" }}>{ele.data}</h4>
                  <button onClick={() => dispatch(DeleteTodo(ele.id))}>
                    Delete
                  </button>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CounterBySelector;
