"use strict";

import { Record } from "immutable";

const _shape = {
  id: undefined,
  name: "",
};

export class UserModel extends Record(_shape) {}

export const create = (payload) => new UserModel(payload);

export const getID = (userModel) => userModel.id;

export const getName = (userModel) => userModel.name;
