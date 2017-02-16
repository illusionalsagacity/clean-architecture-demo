"use strict";

import { Record, List } from "immutable";
import { getID } from "./UserModel";

const _shape = {
  users: List(),
};

export class UserCollection extends Record(_shape) {}

export const empty = new UserCollection();

export const add = (userCollection, userModel) => userCollection.update("users", users => users.push(userModel));

export const remove = (userCollection, id) => userCollection.update("users",
  users => users.filterNot(user => getID(user) === id)
);

export const get = (userCollection, id) => userCollection.users.find(user => getID(user) === id);
