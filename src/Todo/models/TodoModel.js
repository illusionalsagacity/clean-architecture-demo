//@flow

"use strict";

import { Record } from "immutable";

type T_ID = number | string;

type T_payload = {
  description: string,
  id: T_ID,
  name: string,
  creatorID: T_ID,
};

const _shape: T_payload = {
  description: "",
  id: undefined,
  name: "",
  creatorID: undefined,
};

export class TodoModel extends Record(_shape) {}

//TODO: flow type payload
export const create = (payload: T_payload): TodoModel => new TodoModel(payload);

export const getID = (todoModel: TodoModel): T_ID => todoModel.id;

export const getCreatorID = (todoModel: TodoModel): T_ID => todoModel.creatorID;
