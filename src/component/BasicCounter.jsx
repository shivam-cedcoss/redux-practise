import React, { useState } from "react";
import { connect } from "react-redux";
import { MapDispatchToProps, MapStateToProps } from "../connect/Connect";

const Counter = (props) => {
  const {
    count,
    todos,
    handleDecrement,
    handleIncrement,
    handleAddText,
    handleDeleteTodo,
    handleChecked,
  } = props;
  const [text, setText] = useState("");
  const AddTodo = () => {
    if (text === "") return;
    const id = parseInt(Math.random() * 1000);
    handleAddText(text, id);
    setText("");
  };
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => handleIncrement()}>Increase</button>
      <button onClick={() => handleDecrement()}>Decrease</button>
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
                    onChange={(e) => handleChecked(ele.id, e.target.checked)}
                  />
                  <p>{ele.id}</p>
                  <h4>{ele.data}</h4>
                  <button onClick={() => handleDeleteTodo(ele.id)}>
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
                    onChange={(e) => handleChecked(ele.id, e.target.checked)}
                  />
                  <p style={{ textDecoration: "line-through" }}>{ele.id}</p>
                  <h4 style={{ textDecoration: "line-through" }}>{ele.data}</h4>
                  <button onClick={() => handleDeleteTodo(ele.id)}>
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

export default connect(MapStateToProps, MapDispatchToProps)(Counter);
