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

const UsecaseMiddleware = (...usecaseInteractors) => store => next => action => {
  if (action.type.contains("@usecase")) {
    usecaseInteractors.forEach(interactor => {
      if (interactor[action.type]) {
        interactor[action.type](action, store.dispatch, store.getState);
      }
    });
  } else {
    next(action);
  }
};

type Usecase = (services: Object) => any;

const createInitializeServices = (dispatch, getState) => services => {
  let _services = {};
  for (let p in services) {
    _services[p] = services[p](dispatch, getState);
  }
  return _services;
};

const createInteractor = usecase => services => (...args) => usecase(services)(...args);

const DeleteTodoUsecase = ({ TodoService }) => async (todoID) => {
  await TodoService.deleteTodo(todoID);
};

const AddTodoUsecase = ({ ValidationService, TodoService }) => async (creatorID, name, description) => {
  let isValid = await ValidationService.validateTodo(description, name, creatorID);

  if (isValid) {
    await TodoService.createTodo(description, name, creatorID);
  }
};

// a use-case interactor
// the services need to have a type interface
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
  AddTodoUsecase,
  createInteractor,
  createInitializeServices,
  createAddTodoUsecase,
  allTodosUsecase,
};
