/* eslint no-magic-numbers: "off" */

import test from "ava";
import Todo from "Todo";
const { actions, reducers, models } = Todo;
const { users } = reducers;
const { empty, add, remove, size } = models.UserCollection;
const { create } = models.UserModel;

test("users", t => {
  t.truthy(users);

  let state = users(undefined, {});
  t.is(size(state), 0, "the users reducer should handle initial state");

  let addUserAction = actions.users.add(0, "test name");
  t.is(size(state), 0, "The state is empty");
  state = users(state, addUserAction);
  t.is(size(state), 1, "A user has been added");

  let removeUserAction = actions.users.remove(1);
  state = users(state, removeUserAction);
  t.is(size(state), 1, "A remove action with a non-existant id does nothing");

  removeUserAction = actions.users.remove(0);
  state = users(state, removeUserAction);
  t.is(size(state), 0, "A user has been removed");
});
