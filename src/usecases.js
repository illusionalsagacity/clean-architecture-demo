import { AddTodoUsecase, createInitializeServices, createInteractor } from "Todo/usecases";
import { addTodoServices } from "./services";

// essentially, stores the usecase and services so that when we actually go to call the usecase in the component,
// we don't need to pass in dispatch or getState. createInteractor, when passed in the usecase and services, then calls
// the usecase with those services, then spreads args on addTodoUsecase
export const addTodoUsecase = createInteractor(AddTodoUsecase)(addTodoServices);
