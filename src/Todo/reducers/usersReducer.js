"use strict";

import { ADD, REMOVE } from "../actions/userActions";
import { create } from "../models/UserModel";
import { add, remove, empty } from "../models/UserCollection";


const initialState = empty;


const user = (state, action) => {
  switch (action.type) {
    case ADD:
      return create(action.payload);
    default:
      return state;
  }
};

const users = (state=initialState, action) => {
  switch (action.type) {
    case ADD:
      return add(state, user(undefined, action));
    case REMOVE:
      return remove(state, action.payload.id);
    default:
      return state;
  }
};

export default users;
