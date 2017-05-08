/* eslint no-magic-numbers: "off" */

import test from "ava";
import reducers from "Todo/reducers";
import actions from "Todo/actions";
import models from "Todo/models";
import { is } from "immutable";
const { todo, todos } = reducers;
const { empty, add, remove } = models.TodoCollection;
const { create } = models.TodoModel;


test("todos", t => {
  t.truthy(todos);
  let expected = empty();
  let state = todos(undefined, {});
  t.truthy(is(expected, state), "todos handles initial state");
});

test("addTodo", t => {
  let state = empty();
  let addTodoAction = actions.todo.add(0, "test name", "test description");
  state = todos(state, addTodoAction);
  let expected = add(empty(), create(addTodoAction.payload));

  t.truthy(is(expected, state), "add a todo to the state");

});

test(t => {
  let state = empty();
  let addTodoAction = actions.todo.add(0, "test name", "test description");
  state = todos(state, addTodoAction);
  t.is(state.todos.size, 1);
  state = todos(state, actions.todo.remove(0));
  t.truthy(is(empty(), state));
  t.is(state.todos.size, 0);
});
