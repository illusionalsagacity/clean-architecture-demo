import shortid from "shortid";
import actions from "Todo/actions";
import TodoSDK from "./sdk";


export const createErrorService = (dispatch, getState) => ({
  reportError: (err: Error) => {
    console.error(err.message);
  },
});


export const createValidationService = (dispatch, getState) => {

  const validateTodo = async (description, name, creatorID, date) => {
    const validation = await TodoSDK.validateTodo(description, name, creatorID, date)
      .catch(console.error)
      .then(data => data.json());

    if (validation && validation.valid) {
      return true;
    } else {
      return new Error("Validation service failed");
    }
  };

  return {
    validateTodo,
  };
};

export const createTodoService = (dispatch, getState) => {
  const createTodo = async (description, name, creatorID, date) => {
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
};
