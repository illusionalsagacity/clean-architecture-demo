import BaseService from "./BaseService";
import TodoSDK from "../sdk";
import { bindActionCreators } from "redux";
import { add, addAll } from "../actions/todoActions";
import { update } from "../actions/todoListActions";

export default class TodoService extends BaseService {
  async createTodo(description, name, creatorID, date) {
    const payload = await TodoSDK.createTodo(description, name, creatorID, date)
      .catch(console.error)
      .then(data => data.json());

    let { id } = payload;

    this.dispatch(add(id, creatorID, name, description, date));
    // temporary hack
    this.dispatch(update("all", "All Todos", payload.id));

    return payload;
  }

  async loadTodos() {
    const payload = await TodoSDK.loadTodos()
      .catch(console.error)
      .then(data => data.json());

    const todos = Object.values(payload);

    this.dispatch(addAll(todos));
    todos.forEach(({ id }) => {
      this.dispatch(update("all", "All Todos", id));
    });
  }
}
