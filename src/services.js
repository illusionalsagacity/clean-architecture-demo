import { ServiceInitializer } from "clean-architecture-utils";
import { ValidationService, TodoService, ErrorService } from "Todo/services";
import { dispatch, getState } from "./store";

// This creates a function that passes in dispatch and getState to all the uninitialized services.
//
//
const serviceInitializer = ServiceInitializer(dispatch, getState);

// You could use this to initialize all the services in the application, then pull out the ones you need for each usecase.
export const addTodoServices = serviceInitializer({
  ValidationService,
  TodoService,
  ErrorService,
});
