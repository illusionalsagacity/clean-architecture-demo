const DeleteTodoUsecase = ({ TodoService }) => async (todoID) => {
  await TodoService.deleteTodo(todoID);
};

const AddTodoUsecase = ({ ValidationService, TodoService, ErrorService }) => {
  return async (creatorID, name, description, date) => {
    let maybeError = await ValidationService.validateTodo(description, name, creatorID, date);

    if (maybeError instanceof Error) {
      ErrorService.reportError(maybeError);
    } else {
      await TodoService.createTodo(description, name, creatorID, date);
    }
  };
};


export {
  AddTodoUsecase,
  DeleteTodoUsecase,
};
