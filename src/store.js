import Todo from "Todo";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
const { reducers, actions } = Todo;

//use const for PROD
let store = createStore(
  combineReducers({
    todoLists: reducers.todoLists,
    todos: reducers.todos,
    users: reducers.users,
  }),
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

let todoID = 0;
let userID = 0;

// local store hydration
store.dispatch(actions.user.add(userID++, `user ${userID}`));
store.dispatch(actions.user.add(userID++, `user ${userID}`));

store.dispatch(actions.todo.add(todoID++, 0, `Hello World - ${todoID}`, "Description"));
store.dispatch(actions.todo.add(todoID++, 0, `Hello World - ${todoID}`, "Description"));
store.dispatch(actions.todo.add(todoID++, 0, `Hello World - ${todoID}`, "Description"));

store.dispatch(actions.todo.add(todoID++, 1, `Hello World - ${todoID}`, "Description"));
store.dispatch(actions.todo.add(todoID++, 1, `Hello World - ${todoID}`, "Description"));
store.dispatch(actions.todo.add(todoID++, 1, `Hello World - ${todoID}`, "Description"));

store.dispatch(actions.todoList.add(0, [0, 1, 2]));
store.dispatch(actions.todoList.add(1, [3, 4, 5]));
store.dispatch(actions.todoList.add(2, [0, 1, 2, 3, 4, 5]));


export default store;
