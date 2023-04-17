import { combineReducers } from "redux";
import { IBrandState } from "../../types/brand";
import { IDeviceState } from "../../types/device";
import { ITypeState } from "../../types/type";
import { IUserState } from "../../types/user";
import { brandReducer } from "./brandReducer";
import { deviceReducer } from "./deviceReducer";
import { typeReducer } from "./typeReducer";
import { userReducer } from "./userReducer";
import { IBasketState } from "../../types/basket";
import { basketReducer } from "./basketReducer";

export interface GlobalAppState {
  user: IUserState;
  type: ITypeState;
  brand: IBrandState;
  device: IDeviceState;
  basket: IBasketState;
}
export const rootReducer = combineReducers<GlobalAppState>({
  user: userReducer,
  type: typeReducer,
  brand: brandReducer,
  device: deviceReducer,
  basket: basketReducer,
});
