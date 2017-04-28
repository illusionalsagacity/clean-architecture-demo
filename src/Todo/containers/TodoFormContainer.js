//@flow

import { connect } from "react-redux";
import TodoFormComponent from "../components/TodoFormComponent";
import { addTodoUsecase } from "usecases";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (name: string, description: string, date: string) => addTodoUsecase(ownProps.userID, name, description, date),
  };
};

const TodoFormContainer = connect(undefined, mapDispatchToProps)(TodoFormComponent);

export default TodoFormContainer;
