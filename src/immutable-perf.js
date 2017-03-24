import { Map, List } from "immutable";

class Obj {
  constructor(id) {
    this.id = id;
  }

  // get id() {
  //   return this.id;
  // }

  // set id(newID) {
  //   this.id = newID;
  // }
}


let map = Map();

console.log("Map:\n----");

console.time("set");
for (let i = 0; i < 10000; i++) {
  map = map.set(i, new Obj(i));
}
console.timeEnd("set");

console.time("random find");
for (let i = 0; i < 5000; i++) {
  let id = Math.floor(Math.random() * 10000);
  map.find(item => item.id === id);
}
console.timeEnd("random find");

console.time("remove");
for (let i = 10000; i > 0; i--) {
  map = map.remove(i);
}
console.timeEnd("remove");

console.log("\n");


let list = List();

console.log("List:\n-----");
console.time("push");
for (let i = 0; i < 10000; i++) {
  list = list.push(new Obj(i));
}
console.timeEnd("push");

console.time("random find");
for (let i = 0; i < 5000; i++) {
  let id = Math.floor(Math.random() * 10000);
  list.find(item => item.id === id);
}
console.timeEnd("random find");

console.time("remove");
for (let i = 10000; i > 0; i--) {
  list = list.remove(i);
}
console.timeEnd("remove");
