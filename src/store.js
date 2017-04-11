import Todo from "Todo";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import Perf from "react-addons-perf";
import shortid from "shortid";
const { reducers, actions, models, services, usecases } = Todo;
const { createValidationService, createTodoService, createErrorService } = services;
const { AddTodoUsecase, createInitializeServices, createInteractor } = usecases;

let store = createStore(
  combineReducers({
    todoLists: reducers.todoLists,
    todos: reducers.todos,
    users: reducers.users,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);


// This creates a function that passes in dispatch and getState to all the uninitialized services.
const initializeServices = createInitializeServices(store.dispatch, store.getState);

// You could use this to initialize all the services in the application, then pull out the ones you need for each usecase.
const addTodoServices = initializeServices({
  ValidationService: createValidationService,
  TodoService: createTodoService,
  ErrorService: createErrorService,
});

// essentially, stores the usecase and services so that when we actually go to call the usecase in the component,
// we don't need to pass in dispatch or getState. createInteractor, when passed in the usecase and services, then calls
// the usecase with those services, then spreads args on addTodoUsecase
export const addTodoUsecase = createInteractor(AddTodoUsecase)(addTodoServices);


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


export default store;
