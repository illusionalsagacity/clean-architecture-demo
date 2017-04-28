import createCachedSelector from "re-reselect";
import { getCreatorID } from "./models/TodoModel";
import { get as getUser } from "./models/UserCollection";
import { get as getTodoList } from "./models/TodoListCollection";
import { get as getTodo } from "./models/TodoCollection";


export const usersSelector = state => state.users;
export const userIDSelector = (state, props) => props.userID;

export const selectUserByID = createCachedSelector(
  [usersSelector, userIDSelector],
  (users, userID) => getUser(users, userID)
)((state, props) => props.userID);

export const todosSelector = state => state.todos;
export const propTodoIDSelector = (state, props) => props.todoID;

export const selectTodoByID = createCachedSelector(
  [todosSelector, propTodoIDSelector],
  (todos, todoID) => getTodo(todos, todoID)
)((state, props) => props.todoID);

export const selectTodoByIDWithUser = createCachedSelector(
  [selectTodoByID, usersSelector],
  (todo, users) => {
    return {
      user: getUser(users, getCreatorID(todo)),
      todo,
    };
  }
)((state, props) => props.todoID);

export const todoListsSelector = state => state.todoLists;
export const todoListIDSelector = (state, props) => props.todoListID;

export const selectTodoListByID = createCachedSelector(
  [todoListsSelector, todoListIDSelector],
  (todoLists, todoListID) => getTodoList(todoLists, todoListID)
)((state, props) => props.todoListID);
