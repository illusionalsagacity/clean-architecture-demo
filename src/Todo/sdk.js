import shortid from "shortid";

const LOCALSTORAGE_KEY = 'todos';

const mockFetchResponse = (res) => {
  return { json: () => res };
};

// ** MOCK API ** //
const TodoSDK = {
  validateTodo: (description, name, creatorID, date) => {
    return new Promise((resolve, reject) => {
      let response = {
        valid: !!(description && name && creatorID),
      };
      resolve(mockFetchResponse(response));
    });
  },

  createTodo: async (description, name, creatorID, date) => {
    return new Promise((resolve, reject) => {
      const id = shortid.generate();
      const response = {
        id,
        description,
        name,
        creatorID,
        date,
      };

      const oldTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "{}");
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({
        ...oldTodos,
        [id]: response,
      }));

      resolve(mockFetchResponse(response));
    });
  },

  loadTodo: async (todoID) => {
    return new Promise((resolve, reject) => {
      const todos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

      if (todos.hasOwnProperty(todoID)) {
        resolve(mockFetchResponse(todos[todoID]));
      }

      reject(new Error(`Could not find todo of id: ${todoID}`));
    });
  },

  loadTodos: async () => {
    return new Promise((resolve, reject) => {
      const todos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

      if (todos) {
        resolve(mockFetchResponse(todos));
      }

      reject(new Error('Could not load todos'));
    });
  },
};

export default TodoSDK;
