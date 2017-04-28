import reducers from "Todo/reducers";
// import actions from "Todo/actions";
// import models from "Todo/modles";
import { applyMiddleware, createStore, combineReducers } from "redux";
import Perf from "react-addons-perf";
import shortid from "shortid";

const storeCreator = typeof window !== "undefined" && window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

const store = storeCreator(
  combineReducers({
    todoLists: reducers.todoLists,
    todos: reducers.todos,
    users: reducers.users,
  }),
  {}
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// let todoID = 0;

// local store hydration

// let userIDs = [];

// for (let i = 0; i < 5; i++) {
//   userIDs[i] = shortid.generate();

//   store.dispatch(actions.users.add(userIDs[i], `user ${userIDs[i]}`));

//   for (let j = 0; j < 10; j++) {
//     let todoID = shortid.generate();
//     store.dispatch(addTodoUsecase(userIDs[i], `Hello World - ${todoID}`, "Description"));
//   }
// }

// const getTodos = state => state.todos;

// let todosBy0 = models.TodoCollection.getIDsByCreatorID(getTodos(store.getState()), userIDs[0]);
// let todosBy1 = models.TodoCollection.getIDsByCreatorID(getTodos(store.getState()), userIDs[1]);

//TODO: add user buckets to TodoCollection and query
// store.dispatch(actions.todoList.add(0, todosBy0));
// store.dispatch(actions.todoList.add(1, todosBy1));

export const { dispatch, getState } = store;
export default store;
