//@flow

"use strict";

export const ADD = "@todo/ADD";
export const REMOVE = "@todo/REMOVE";

export const add = (id: string, creatorID: string, name: string, description: string, date: string) => {
  return {
    type: ADD,
    payload: { id, creatorID, name, description, date },
  };
};

export const remove = (id: string) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};
