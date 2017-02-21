import { Record, Set, Map } from "immutable";


// export default class ReverseLookup extends Record({ map: Map() }) {
//   add = (k, v) => {
//     return this.map.set(k, v);
//   }

//   remove = (key, value) => {
//     if (!this.map.has(value)) {
//       return this.map;
//     }
//     return this.map.update(key, v => v.remove(value) );
//   }
// }

// const add = (table, k, v) => {
//   if (!table.has(v)) {
//     return table.set(k, v);
//   }
// };

// export class IndexedLookupTable extends Record({ map: Map() }) {
// }

/** holds a map of Key<K> : Set<V> */
export const empty = Map();

const ensureSet = values => Set.isSet(values) ? values : Set.of(values);

// If the lookupTable already contains an index, merge with the existing values.
export const add = (lookupTable, index, values) => {
  let valueSet = ensureSet(values);
  return !lookupTable.has(index) ?
    lookupTable.set(index, valueSet) :
    lookupTable.update(index, set => set.union(valueSet));
};

export const remove = (lookupTable, index, values) => {
  if (!lookupTable.has(index)) {
    return lookupTable;
  }

  if (values) {
    let valueSet = ensureSet(values);
    return lookupTable.update(index, set => set.subtract(valueSet));
  }

  return lookupTable.remove(index);
};

export const get = (lookupTable, index) => lookupTable.get(index);
