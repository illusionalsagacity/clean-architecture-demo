import Todo from "Todo";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
const { reducers, actions } = Todo;


//use const for PROD
let store = createStore(
  combineReducers({
    todoLists: reducers.todoLists,
    todos: reducers.todos,
  }),
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

let todoID = 0;

// local store hydration
store.dispatch(actions.add(todoID++, `Hello World - ${todoID}`, "Description"));
store.dispatch(actions.add(todoID++, `Hello World - ${todoID}`, "Description"));
store.dispatch(actions.add(todoID++, `Hello World - ${todoID}`, "Description"));
store.dispatch(actions.addTodoList(0, [0, 1, 2]));


export default store;
