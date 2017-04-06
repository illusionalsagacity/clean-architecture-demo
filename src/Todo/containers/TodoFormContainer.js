//@flow

import { connect } from "react-redux";
import TodoFormComponent from "../components/TodoFormComponent";
import { addTodoUsecase } from "store";

const makeMapDispatchToProps = () => {
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addTodo: (name: string, description: string, date: string) => addTodoUsecase(ownProps.userID, name, description, date),
    };
  };

  return mapDispatchToProps;
};

const TodoFormContainer = connect(undefined, makeMapDispatchToProps)(TodoFormComponent);

export default TodoFormContainer;
