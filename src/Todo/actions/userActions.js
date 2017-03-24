//@flow

"use strict";

export const ADD: string = "@user/ADD";
export const REMOVE: string = "@user/REMOVE";

type t_addAction = {
  type: string,
  payload: {
    id: string,
    name: string,
  },
};

type t_removeAction = {
  type: string,
  payload: {
    id: string,
  },
};

export const add = (id: string, name: string): t_addAction => ({
  type: ADD,
  payload: { id, name },
});

export const remove = (id: string): t_removeAction => ({
  type: REMOVE,
  payload: { id },
});
