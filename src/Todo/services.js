import shortid from "shortid";
import actions from "Todo/actions";


const mockFetchResponse = (res) => {
  return { json: () => res };
};

// ** MOCK API ** //
const api = {
  validateTodo: (description, name, creatorID) => {
    return new Promise((resolve, reject) => {
      let response = {
        valid: !!(description && name && creatorID),
      };
      resolve(mockFetchResponse(response));
    });
  },
  createTodo: async (description, name, creatorID) => {
    return new Promise((resolve, reject) => {
      let response = {
        id: shortid.generate(),
        description,
        name,
        creatorID,
      };

      resolve(mockFetchResponse(response));
    });
  },
};

export function createValidationService(dispatch, getState) {

  var validateTodo = async (description, name, creatorID) => {
    debugger;

    const validation = await api.validateTodo(description, name, creatorID)
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

  var createTodo = async (description, name, creatorID) => {

    return api.createTodo(description, name, creatorID)
      .catch(console.error)
      .then(data => data.json())
      .then(payload => {
        let { id, creatorID, name, description } = payload;

        dispatch(actions.todo.add(id, creatorID, name, description));
        dispatch(actions.todoList.update("all", payload.id));
      })
      .catch(console.error);
  };

  return {
    createTodo,
  };
}
