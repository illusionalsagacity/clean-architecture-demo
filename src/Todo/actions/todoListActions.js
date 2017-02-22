export const ADD = "@todoList/ADD";
export const UPDATE = "@todoList/UPDATE";

export const add = (id, todoIDs) => {
  return {
    type: ADD,
    payload: { id, todoIDs },
  };
};

export const update = (id, todoID) => {
  return {
    type: UPDATE,
    payload: { id, todoID },
  };
};
