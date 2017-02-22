import { ValidationService, TodoService } from "./services";
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
const createAddTodoUsecase = ({ ValidationService, TodoService }) => {

  // the use case itself (which is a thunk)
  return (creatorID, name, description) => {
    const { validateTodo } = ValidationService;
    const { createTodo } = TodoService;

    return async (dispatch, getState) => {
      let valid = await validateTodo(description, name, creatorID);

      if (valid) {
        let payload = await createTodo(description, name, creatorID);
        let { id } = payload;
        dispatch(todo.add(id, creatorID, name, description));
        dispatch(todoList.update("all", id));
      } else {
        dispatch(error.add("Todo Validation Failed"));
      }
    };
  };
};

export default {
  addTodoUsecase: createAddTodoUsecase({ ValidationService, TodoService }),
  allTodosUsecase,
};
