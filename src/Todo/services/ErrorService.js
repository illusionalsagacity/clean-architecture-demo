import BaseService from "./BaseService";

export default class ErrorService extends BaseService {
  async reportError(err: Error) {
    console.error(err.message);
  }
}
