"use strict";

export const ADD = "@todo/ADD";
export const REMOVE = "@todo/REMOVE";

export const add = (id, creatorID, name, description) => {
  return {
    type: ADD,
    payload: { id, creatorID, name, description },
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};
