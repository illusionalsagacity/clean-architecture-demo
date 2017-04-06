/* eslint no-magic-numbers: "off" */

import test from "ava";
import Todo from "Todo";
const { reducers, models } = Todo;
import * as actions from "Todo/actions/todoListActions";
const { todoLists } = reducers;
const { empty, add, remove, size } = models.TodoListCollection;
const { create } = models.TodoListModel;

test("todoLists", t => {
  t.true(!!todoLists, "todoLists is defined");

  let state = todoLists(undefined, {});
  t.is(size(state), 0, "initial state is handled");


  console.log(actions.add);

  // state = todoLists(state, add("test_id", [ "1", "2", "3" ]));
});