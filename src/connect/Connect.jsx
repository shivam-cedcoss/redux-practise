import {
  AddText,
  CheckedTodo,
  Decrease,
  DeleteTodo,
  Increase,
} from "../actions/Actions";

export const MapStateToProps = (state) => {
  return state;
};
export const MapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(Increase()),
    handleDecrement: () => dispatch(Decrease()),
    handleAddText: (text, id) => dispatch(AddText(text, id)),
    handleDeleteTodo: (id) => dispatch(DeleteTodo(id)),
    handleChecked: (id, checked) => dispatch(CheckedTodo(id, checked)),
  };
};
