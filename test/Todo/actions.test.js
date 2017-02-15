/* eslint no-magic-numbers: "off" */

import test from "ava";
import { ADD, REMOVE, add, remove } from "Todo/actions";


test(t => {
  t.truthy(ADD);
  t.is(ADD, "@todo/ADD");
});

test(t => {
  t.truthy(REMOVE);
  t.is(REMOVE, "@todo/REMOVE");
});

test(t => {
  t.truthy(add);
  const id = 0;
  const name = "test name";
  const description = "test description";
  const expected = {
    type: ADD,
    payload: { id, name, description },
  };

  t.deepEqual(add(id, name, description), expected);
});

test(t => {
  t.truthy(remove);
  const id = 0;
  const expected = {
    type: REMOVE,
    payload: { id },
  };

  t.deepEqual(remove(id), expected);
});
