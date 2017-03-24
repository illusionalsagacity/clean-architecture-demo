export const ADD = "@todoList/ADD";
export const UPDATE = "@todoList/UPDATE";

export const add = (id, todoIDs) => ({
  type: ADD,
  payload: { id, todoIDs },
});

export const update = (id, todoID) => ({
  type: UPDATE,
  payload: { id, todoID },
});
