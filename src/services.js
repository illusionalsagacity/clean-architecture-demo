import { createInitializeServices, createValidationService, createTodoService, createErrorService } from "Todo/services";
import { dispatch, getState } from "./store";

// This creates a function that passes in dispatch and getState to all the uninitialized services.
//
debugger;
const initializeServices = createInitializeServices(dispatch, getState);

// You could use this to initialize all the services in the application, then pull out the ones you need for each usecase.
export const addTodoServices = initializeServices({
  ValidationService: createValidationService,
  TodoService: createTodoService,
  ErrorService: createErrorService,
});
