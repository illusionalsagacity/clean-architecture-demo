/* eslint no-magic-numbers: "off" */

import test from "ava";
import Todo from "Todo";
const { actions, reducers, models } = Todo;
const { todoLists } = reducers;
const { empty, add, remove, size } = models.TodoListCollection;
const { create } = models.TodoListModel;

test("todoLists", t => {
  t.truthy(todoLists, "todoLists is defined");

  let state = todoLists(undefined, {});
  t.is(size(state), 0, "initial state is handled");
});