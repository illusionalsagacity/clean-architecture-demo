import { createValidationService, createTodoService } from "./services";
import actions from "./actions";
const { todo, todoList } = actions;

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

const AddTodoUsecase = ({ ValidationService, TodoService, ErrorService }) => {
  return async (creatorID, name, description, date) => {
    let isValid = await ValidationService.validateTodo(description, name, creatorID);

    if (isValid instanceof Error) {
      ErrorService.reportError(isValid);
    } else {
      await TodoService.createTodo(description, name, creatorID, date);
    }
  };
};


export default {
  AddTodoUsecase,
  createInteractor,
  createInitializeServices,
};
