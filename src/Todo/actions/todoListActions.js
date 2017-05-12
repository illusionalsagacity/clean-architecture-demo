//@flow

export const ADD: string = "@todoList/ADD";
export const UPDATE: string = "@todoList/UPDATE";

type Action<P> = {
  type: string,
  payload: P,
};

type AddPayload = {
  id: string,
  name: string,
  todoIDs: string[],
};

type UpdatePayload = {
  id: string,
  name: string,
  todoID: string,
};

export const add = (id: string, name: string, todoIDs: string[]): Action<AddPayload> => ({
  type: ADD,
  payload: { id, name, todoIDs },
});

export const update = (id: string, name: string, todoID: string): Action<UpdatePayload> => ({
  type: UPDATE,
  payload: { id, name, todoID },
});
