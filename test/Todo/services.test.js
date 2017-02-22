import test from "ava";
import { ValidationService } from "Todo/services";

test(async t => {
  t.truthy(ValidationService);
  let foo = await ValidationService.validateTodo();
  t.is(foo, true);
});
