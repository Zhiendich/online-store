import { Dispatch } from "redux";
import axios from "axios";
import { ActionBasket, basketAction } from "../../types/basket";

export const fetchBasket = (id: number) => {
  return async (dispatch: Dispatch<basketAction>) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_BASKET}/getBasket/${id}`
      );
      dispatch({
        type: ActionBasket.FETCH_BASKET,
        payload: response.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const fetchBasketDevices = (id: number) => {
  return async (dispatch: Dispatch<basketAction>) => {
    try {
      dispatch({
        type: ActionBasket.FETCH_BASKET_DEVICES,
      });
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_BASKET}/${id}`
      );
      dispatch({
        type: ActionBasket.FETCH_BASKET_DEVICES_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: ActionBasket.FETCH_BASKET_DEVICES_ERROR,
        payload: error,
      });
    }
  };
};

export const addDeviceToBasket = (deviceId: number, basketId: number) => {
  return async (dispatch: Dispatch<basketAction>) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL_BASKET}/`, {
        deviceId,
        basketId,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const deleteBasketDevice = (deviceId: number, basketId: number) => {
  return async (dispatch: Dispatch<basketAction>) => {
    try {
      dispatch({
        type: ActionBasket.DELETE_BASKET_DEVICES,
      });
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL_BASKET}`,
        {
          data: {
            deviceId,
            basketId,
          },
        }
      );
      dispatch({
        type: ActionBasket.DELETE_BASKET_DEVICES_SUCCESS,
        payload: response.data.deviceID,
      });
    } catch (error: any) {
      dispatch({
        type: ActionBasket.DELETE_BASKET_DEVICES_ERROR,
        payload: error,
      });
      console.log(error);
    }
  };
};
