//@flow

"use strict";

export const ADD: string = "@user/ADD";
export const REMOVE: string = "@user/REMOVE";

type t_Action<P> = {
  type: string,
  payload: P,
};

type t_AddPayload = {
  id: string,
  name: string,
};

type t_RemovePayload = {
  id: string,
};

export const add = (id: string, name: string): t_Action<t_AddPayload> => ({
  type: ADD,
  payload: { id, name },
});

export const remove = (id: string): t_Action<t_RemovePayload> => ({
  type: REMOVE,
  payload: { id },
});
