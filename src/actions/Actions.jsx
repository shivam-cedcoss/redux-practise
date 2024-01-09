export const Increase = () => {
  return {
    type: "INCREMENT",
  };
};

export const Decrease = () => {
  return {
    type: "DECREMENT",
  };
};

export const AddText = (text, id) => {
  return {
    type: "ADDTEXT",
    payload: text,
    id: id,
  };
};

export const DeleteTodo = (id) => {
  return {
    type: "DELETE",
    id: id,
  };
};

export const CheckedTodo = (id, checked) => {
  return {
    type: "CHECKED",
    id: id,
    checked: checked,
  };
};
