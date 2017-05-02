import BaseService from "./BaseService";
import ErrorService from "./ErrorService";
import TodoSDK from "../sdk";

export default class ValidationService extends BaseService {
  async validateTodo(description: string, name: string, creatorID: string, date: string) {
    const validation = await TodoSDK.validateTodo(description, name, creatorID, date)
      .catch(console.error)
      .then(data => data.json());

    if (validation && validation.valid) {
      return true;
    } else {
      return new Error("Validation service failed");
    }
  }
}
