import test from "ava";
import sinon from "sinon";
import { AddTodoUsecase } from "Todo/usecases";


test("AddTodoUsecase", t => {
  const services = {
    ValidationService: {
      validateTodo: sinon.spy(() => Promise.resolve(true)),
    },
    TodoService: {
      createTodo: sinon.spy((description, name, creatorID, date) => ({ id: "foo", description, name, creatorID, date })),
    },
    ErrorService: {
      reportError: sinon.spy(err => console.log(err)),
    },
  };

  t.truthy(AddTodoUsecase, "AddTodoUsecase is defined");
  const addTodoUsecase = AddTodoUsecase(services);
  t.truthy(addTodoUsecase, "the curried usecase is defined");

  // Here we're just checking to make sure the services provided were called. We don't care about if the services *did*
  // anything because they'll have their own tests
  addTodoUsecase("bar", "name", "description", "2017-01-01").then(data => {
    t.true(services.ValidationService.validateTodo.calledOnce);
    t.false(services.ErrorService.reportError.calledOnce);
    t.is(services.ErrorService.reportError.called, 0);
    t.true(services.TodoService.createTodo.calledOnce);
  });
});
