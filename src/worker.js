import "babel-polyfill";
import * as usecases from "Todo/usecases";

onmessage = e => {
  console.log(e);
  postMessage("Hello World");
};