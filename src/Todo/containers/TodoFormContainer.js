//@flow

import { connect } from "react-redux";
import TodoFormComponent from "../components/TodoFormComponent";

import usecases from "../usecases";
import * as services from "../services";
const { createTodoService, createValidationService } = services;
const { createAddTodoUsecase } = usecases;

const makeMapDispatchToProps = () => {
  const mapDispatchToProps = (dispatch, ownProps) => {
    const addTodoUsecase = createAddTodoUsecase({
      TodoService: createTodoService(dispatch),
      ValidationService: createValidationService(dispatch),
    });

    return {
      addTodo: (name: string, description: string) => addTodoUsecase(ownProps.userID, name, description),
    };
  };

  return mapDispatchToProps;
};

const TodoFormContainer = connect(undefined, makeMapDispatchToProps)(TodoFormComponent);

export default TodoFormContainer;