/* eslint no-magic-numbers: "off" */

import test from "ava";
import { Map, Set } from "immutable";
import { empty, add, get, remove } from "ReverseLookup";


test(t => {
  t.truthy(empty, "empty is defined");
  t.truthy(Map.isMap(empty), "empty is an Immutable.js Map");
  t.is(empty.size, 0, "empty has a size of 0");
});

test(t => {
  t.truthy(get, "get is defined");
  let table = empty;
  const key = 1;

  t.falsy( get(table, 1), "getting a key that does not exist is falsy" );

  table = add(table, 1, 1);
  t.truthy( Set.isSet( get(table, 1) ), "get returns a Set at the given key" );
});

test(t => {
  t.truthy(add, "add is defined");
  let table = empty;
  const key = 1;

  table = add(table, key, 0);
  t.is(table.size, 1, "add increases the size of the table when given an Array");
  t.is(table.get(key).size, 1, "add increases the size of the set at the key");
  t.truthy(Set.isSet(table.get(key)), "the object at the key is an Immutable Set");

  table = add(table, key, 1);
  t.is(table.size, 1, "consequtive adds to the same key do not add to the size of the map");
  t.is(table.get(key).size, 2, "add increases the size of the Set at the key given");

  table = add(table, key, Set.of(1));
  t.is(table.get(key).size, 2, "attempting to add an already existing value does not work");

  table = add(table, 2, 1);
  t.is(table.size, 2, "add to a different key increase the size of the map");
  t.is(table.get(2).size, 1, "add increases the size of the Set at the key given");
});

test(t => {
  t.truthy(remove, "remove is defined");
  let table = empty;
  const key = 1;
  table = add(table, key, 0);
  table = add(table, key, 1);
  table = add(table, key, 2);

  t.is(table.get(key).size, 3);
  table = remove(table, key, 1);
  t.is(table.get(key).size, 2, "remove reduces the amount of values in the set at the given key");

  table = remove(table, 2, 1);
  t.is(table.size, 1, "remove at an undefined key does not affect the map");
  t.is(table.get(key).size, 2, "remove at an undefined key does not affect the map");

  table = remove(table, 1);
  t.is(table.size, 0, "remove without a values argument removes all values at the specified key");
});
