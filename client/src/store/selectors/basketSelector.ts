import { GlobalAppState } from "../reducers/reducer";

export const selectBasket = (state: GlobalAppState) => state.basket.basket;
export const selectBasketDevices = (state: GlobalAppState) =>
  state.basket.basketDevices;
