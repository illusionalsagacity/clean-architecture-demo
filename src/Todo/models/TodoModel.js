"use strict";

import { Record } from "immutable";


const _shape = {
  description: "",
  id: undefined,
  name: "",
  creatorID: undefined,
};

export class TodoModel extends Record(_shape) {}

//TODO: flow type payload
export const create = (payload) => new TodoModel(payload);

export const getID = (todoModel) => todoModel.id;
