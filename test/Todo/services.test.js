import test from "ava";
import { createValidationService } from "Todo/services";

test(async t => {
  t.truthy(createValidationService);
  // let foo = await createValidationService().validateTodo();
  // t.is(foo, true);
});
