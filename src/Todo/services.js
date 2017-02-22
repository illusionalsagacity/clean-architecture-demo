import shortid from "shortid";


//TODO: actually call a REST endpoint.
export const ValidationService = {
  validateTodo: async (description, name, creatorID) => {
    return !!(description && name && creatorID);
  },
};


async function createTodo(description, name, creatorID) {
  //TODO: actually call a REST endpoint.
  return {
    id: shortid.generate(),
    description,
    name,
    creatorID,
  };
}

export const TodoService = {
  createTodo,
};
