"use strict";

export const ADD = "@user/ADD";
export const REMOVE = "@user/REMOVE";

export const add = (id, name) => {
  return {
    type: ADD,
    payload: { id, name },
  };
};

export const remove = (id) => {
  return {
    type: REMOVE,
    payload: { id },
  };
};
