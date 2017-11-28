//@flow

"use strict";

export const ADD = "@todo/ADD";
export const ADD_ALL = "@todo/ADD_ALL";
export const REMOVE = "@todo/REMOVE";

export type AddPayload = {|
  creatorID: string,
  date: string,
  description: string,
  id: string,
  name: string,
|};

export type RemovePayload = {|
  id: string,
|};

export const add = (id: string, creatorID: string, name: string, description: string, date: string): ReduxAction<AddPayload> => {
  return {
    type: ADD,
    payload: { id, creatorID, name, description, date },
  };
};

export const addAll = (todos: AddPayload[]): ReduxAction<{ todos: AddPayload[] }> => {
  return {
    type: ADD_ALL,
    payload: {
      todos,
    },
  };
};

export const remove = (id: string): ReduxAction<RemovePayload> => {
  return {
    type: REMOVE,
    payload: { id },
  };
};
