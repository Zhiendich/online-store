import { IDevice } from "./device";

export interface IBasket {
  id?: number;
  user_id: number;
}

export interface IBasketState {
  basket: IBasket | null;
  basketDevices?: IDevice[] | null;
  isBasketDevicesLoading?: boolean;
  isBasketDevicesError?: string | null;
}

export enum ActionBasket {
  FETCH_BASKET = "FETCH_BASKET",
  FETCH_BASKET_DEVICES = "FETCH_BASKET_DEVICES",
  FETCH_BASKET_DEVICES_SUCCESS = "FETCH_BASKET_DEVICES_SUCCESS",
  FETCH_BASKET_DEVICES_ERROR = "FETCH_BASKET_DEVICES_ERROR",
  DELETE_BASKET_DEVICES = "DELETE_BASKET_DEVICES",
  DELETE_BASKET_DEVICES_SUCCESS = "DELETE_BASKET_DEVICES_SUCCESS",
  DELETE_BASKET_DEVICES_ERROR = "DELETE_BASKET_DEVICES_ERROR",
}

interface FetchBasketAction {
  type: ActionBasket.FETCH_BASKET;
  payload: IBasket;
}

interface FetchBasketDevicesAction {
  type: ActionBasket.FETCH_BASKET_DEVICES;
}

interface FetchBasketDevicesSuccessAction {
  type: ActionBasket.FETCH_BASKET_DEVICES_SUCCESS;
  payload: IDevice[];
}

interface FetchBasketDevicesErrorAction {
  type: ActionBasket.FETCH_BASKET_DEVICES_ERROR;
  payload: string;
}

interface DeleteBasketDevicesAction {
  type: ActionBasket.DELETE_BASKET_DEVICES;
}

interface DeleteBasketDevicesSuccessAction {
  type: ActionBasket.DELETE_BASKET_DEVICES_SUCCESS;
  payload: number;
}

interface DeleteBasketDevicesErrorAction {
  type: ActionBasket.DELETE_BASKET_DEVICES_ERROR;
  payload: string;
}

export type basketAction =
  | FetchBasketAction
  | FetchBasketDevicesAction
  | FetchBasketDevicesSuccessAction
  | FetchBasketDevicesErrorAction
  | DeleteBasketDevicesAction
  | DeleteBasketDevicesSuccessAction
  | DeleteBasketDevicesErrorAction;
