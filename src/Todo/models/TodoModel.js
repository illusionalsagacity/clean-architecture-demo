"use strict";

import { Record } from "immutable";

type t_ID = number | string;

const _shape: { description: string, id: t_ID, name: string, creatorID: t_ID } = {
  description: "",
  id: undefined,
  name: "",
  creatorID: undefined,
};

export class TodoModel extends Record(_shape) {}

//TODO: flow type payload
export const create = (payload) => new TodoModel(payload);

export const getID = (todoModel) => todoModel.id;

export const getCreatorID = (todoModel) => todoModel.creatorID;
