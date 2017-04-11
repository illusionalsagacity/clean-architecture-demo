//@flow

"use strict";

export const ADD = "@todo/ADD";
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

export const remove = (id: string): ReduxAction<RemovePayload> => {
  return {
    type: REMOVE,
    payload: { id },
  };
};
