import BaseService from "./BaseService";
import { open } from "../actions/modalActions";


export default class ModalService extends BaseService {
  async openModal(modalID: string) {
    this.dispatch(open(modalID));
    // this needs to return a promise that resolves to the submitted form value
    return Promise.resolve("debug");
  }

  closeModal() {
    this.dispatch(actions.modals.close());
  }
}
