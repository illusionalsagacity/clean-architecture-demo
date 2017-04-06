//@flow

export const ADD: string = "@todoList/ADD";
export const UPDATE: string = "@todoList/UPDATE";

type Action<P> = {
  type: string,
  payload: P,
};

type AddPayload = {
  id: string,
  todoIDs: string[],
};

type UpdatePayload = {
  id: string,
  todoID: string,
};

export const add = (id: string, todoIDs: string[]): Action<AddPayload> => ({
  type: ADD,
  payload: { id, todoIDs },
});

export const update = (id: string, todoID: string): Action<UpdatePayload> => ({
  type: UPDATE,
  payload: { id, todoID },
});
