import BaseService from "./BaseService";
import TodoSDK from "../sdk";
import { bindActionCreators } from "redux";
import { add } from "../actions/todoActions";
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
}
