import Todo from "Todo";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import Perf from "react-addons-perf";
import shortid from "shortid";
const { reducers, actions, models, usecases } = Todo;
const { addTodoUsecase } = usecases;

//use const for PROD
let store = createStore(
  combineReducers({
    todoLists: reducers.todoLists,
    todos: reducers.todos,
    users: reducers.users,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// let todoID = 0;

// local store hydration

// let userIDs = [];

// for (let i = 0; i < 5; i++) {
//   userIDs[i] = shortid.generate();

//   store.dispatch(actions.user.add(userIDs[i], `user ${userIDs[i]}`));

//   for (let j = 0; j < 10; j++) {
//     let todoID = shortid.generate();
//     store.dispatch(addTodoUsecase(userIDs[i], `Hello World - ${todoID}`, "Description"));
//   }
// }

const getTodos = state => state.todos;

// let todosBy0 = models.TodoCollection.getIDsByCreatorID(getTodos(store.getState()), userIDs[0]);
// let todosBy1 = models.TodoCollection.getIDsByCreatorID(getTodos(store.getState()), userIDs[1]);

//TODO: add user buckets to TodoCollection and query
// store.dispatch(actions.todoList.add(0, todosBy0));
// store.dispatch(actions.todoList.add(1, todosBy1));


export default store;
