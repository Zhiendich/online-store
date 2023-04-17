import * as UserActionsCreator from "./user";
import * as TypesActionCreator from "./type";
import * as BrandsActionCreator from "./brand";
import * as DevicesActionCreator from "./device";
import * as BasketActionCreator from "./basket";
export default {
  ...UserActionsCreator,
  ...TypesActionCreator,
  ...BrandsActionCreator,
  ...DevicesActionCreator,
  ...BasketActionCreator,
};
