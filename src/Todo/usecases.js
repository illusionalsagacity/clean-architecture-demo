import { createValidationService, createTodoService } from "./services";
import actions from "./actions";
const { todo, todoList } = actions;


const allTodosUsecase = (state) => {
  //TODO: return a TodoListModelID that holds all the todos.
  return async (dispatch, getState) => {
    // get all current todos,
    // update from server,
    // dispatch adds
  };
};

/**
 * USAGE:
 *
 * function mergeProps(stateProps, dispatchProps, ownProps) {
 *   return Object.assign({}, ownProps, {
 *     ...
 *     addTodo: (name, description) => dispatchProps.addTodo(stateProps.currentUserID, name, description),
 *   });
 * }
 */

// interactors are given a services object and a fn (usecase thunk) to execute


// a use-case interactor
const createAddTodoUsecase = ({ ValidationService, TodoService }) => {

  // the use case itself (which is a thunk)
  return async (creatorID, name, description) => {
    const { validateTodo } = ValidationService;
    const { createTodo } = TodoService;

    let isValid = await validateTodo(description, name, creatorID);

    if (isValid) {
      await createTodo(description, name, creatorID);
    }
  };
};

export default {
  createAddTodoUsecase,
  allTodosUsecase,
};
