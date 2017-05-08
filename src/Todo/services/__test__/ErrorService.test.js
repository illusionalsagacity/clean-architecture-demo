import test from "ava";
import ErrorService from "../ErrorService";

test(t => {
  t.truthy(ErrorService);
  const errorService = new ErrorService();
  t.truthy(errorService.reportError);
});
