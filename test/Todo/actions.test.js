/* eslint no-magic-numbers: "off" */

import test from "ava";
import { ADD, REMOVE, add, remove } from "Todo/actions/todoActions";


test("ADD", t => {
  t.truthy(ADD);
  t.is(ADD, "@todo/ADD");
});

test("REMOVE", t => {
  t.truthy(REMOVE);
  t.is(REMOVE, "@todo/REMOVE");
});

test("add(id, creatorID, name, description, date)", t => {
  t.truthy(add);

  const id = 0,
        name = "test name",
        creatorID = 0,
        description = "test description",
        date = "2017-11-10";

  const expected = {
    type: ADD,
    payload: { id, creatorID, name, description, date },
  };

  t.deepEqual(add(id, creatorID, name, description, date), expected);
});

test("remove(id)", t => {
  t.truthy(remove);
  const id = 0;
  const expected = {
    type: REMOVE,
    payload: { id },
  };

  t.deepEqual(remove(id), expected);
});
