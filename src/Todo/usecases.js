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
 *     addTodo: (name, description) => dispatchProps.addTodo($currentUserID, name, description)
 *   })
 * }
 */

// a use-case interactor
const createAddTodoUsecase = ({ createValidationService, createTodoService }) => {

  // the use case itself (which is a thunk)
  return (creatorID, name, description) => {
    return async (dispatch, getState) => {
    debugger;
    const { validateTodo } = createValidationService(dispatch, getState);
    const { createTodo } = createTodoService(dispatch, getState);

      let isValid = await validateTodo(description, name, creatorID);

      if (isValid) {
        await createTodo(description, name, creatorID);
      }
    };
  };
};

export default {
  addTodoUsecase: createAddTodoUsecase({ createValidationService, createTodoService }),
  allTodosUsecase,
};
