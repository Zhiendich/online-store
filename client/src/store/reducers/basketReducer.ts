import { IBasketState, ActionBasket, basketAction } from "../../types/basket";

const initialState: IBasketState = {
  basket: null,
};

export const basketReducer = (
  state = initialState,
  action: basketAction
): IBasketState => {
  switch (action.type) {
    case ActionBasket.FETCH_BASKET:
      return {
        basket: action.payload,
      };
    case ActionBasket.FETCH_BASKET_DEVICES:
      return {
        basket: state.basket,
        basketDevices: state.basketDevices,
        isBasketDevicesLoading: true,
        isBasketDevicesError: state.isBasketDevicesError,
      };
    case ActionBasket.FETCH_BASKET_DEVICES_SUCCESS:
      return {
        basket: state.basket,
        basketDevices: action.payload,
        isBasketDevicesLoading: false,
        isBasketDevicesError: state.isBasketDevicesError,
      };
    case ActionBasket.FETCH_BASKET_DEVICES_ERROR:
      return {
        basket: state.basket,
        basketDevices: state.basketDevices,
        isBasketDevicesLoading: false,
        isBasketDevicesError: action.payload,
      };
    case ActionBasket.DELETE_BASKET_DEVICES:
      return {
        basket: state.basket,
        basketDevices: state.basketDevices,
        isBasketDevicesLoading: true,
        isBasketDevicesError: state.isBasketDevicesError,
      };
    case ActionBasket.DELETE_BASKET_DEVICES_SUCCESS:
      return {
        basket: state.basket,
        basketDevices: state.basketDevices?.filter(
          (device) => device.id !== action.payload
        ),
        isBasketDevicesLoading: false,
        isBasketDevicesError: state.isBasketDevicesError,
      };
    case ActionBasket.DELETE_BASKET_DEVICES_ERROR:
      return {
        basket: state.basket,
        basketDevices: state.basketDevices,
        isBasketDevicesLoading: false,
        isBasketDevicesError: action.payload,
      };
    default:
      return state;
  }
};
