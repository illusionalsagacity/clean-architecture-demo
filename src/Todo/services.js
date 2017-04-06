import shortid from "shortid";
import actions from "Todo/actions";
import TodoSDK from "./sdk";


const initializeService = (dispatch, getState) => createService => createService(dispatch, getState);

export function createValidationService(dispatch, getState) {

  var validateTodo = async (description, name, creatorID, date) => {
    const validation = await TodoSDK.validateTodo(description, name, creatorID, date)
      .catch(console.error)
      .then(data => data.json());

    if (validation && validation.valid) {
      return true;
    }

    console.error("Todo ValidationService failed");
    return false;
  };

  return {
    validateTodo,
  };
}

export function createTodoService(dispatch, getState) {

  var createTodo = async (description, name, creatorID, date) => {

    return await TodoSDK.createTodo(description, name, creatorID, date)
      .catch(console.error)
      .then(data => data.json())
      .then(payload => {
        let { id, creatorID, name, description, date } = payload;

        dispatch(actions.todo.add(id, creatorID, name, description, date));
        dispatch(actions.todoList.update("all", payload.id));
      })
      .catch(console.error);
  };

  return {
    createTodo,
  };
}
