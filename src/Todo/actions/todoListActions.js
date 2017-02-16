export const ADD = "@todoList/ADD";

export const add = (id, todoIDs) => {
  return {
    type: ADD,
    payload: { id, todoIDs },
  };
};
