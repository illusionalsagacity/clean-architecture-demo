//@flow

"use strict";

import { Record } from "immutable";
import type { AddPayload } from "../actions/todoActions";

type T_ID = number | string;

export class TodoModel extends Record({
  description: "",
  id: undefined,
  name: "",
  creatorID: undefined,
  date: undefined,
}) {}

//TODO: flow type payload
export const create = (payload: AddPayload): TodoModel => new TodoModel(payload);

export const getID = (todoModel: TodoModel): T_ID => todoModel.id;

export const getName = (todoModel: TodoModel): string => todoModel.name;

export const getCreatorID = (todoModel: TodoModel): T_ID => todoModel.creatorID;

export const getDescription = (todoModel: TodoModel): string => todoModel.description;

export const getDate = (todoModel: TodoModel): string => todoModel.date;
