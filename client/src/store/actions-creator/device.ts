import { Dispatch } from "redux";
import axios from "axios";
import $api from "../../http/axios";
import { ActionDevice, deviceAction, IDevice, IInfo } from "../../types/device";

export const fetchDevices = (cat: string, page: number) => {
  return async (dispatch: Dispatch<deviceAction>) => {
    try {
      dispatch({ type: ActionDevice.FETCH_DEVICE });
      let response;
      if (cat) {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL_DEVICE}/${cat}&limit=${process.env.REACT_APP_LIMIT}&page=${page}`
        );
      } else {
        response = await axios.get(
          `${process.env.REACT_APP_API_URL_DEVICE}/?limit=${process.env.REACT_APP_LIMIT}&page=${page}`
        );
      }

      dispatch({
        type: ActionDevice.FETCH_DEVICE_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionDevice.FETCH_DEVICE_ERROR,
        payload: "Не удалось получить устройства",
      });
    }
  };
};

export const addDevice = (newDevice: IDevice, info: IInfo[]) => {
  return async (dispatch: Dispatch<deviceAction>) => {
    try {
      dispatch({ type: ActionDevice.ADD_DEVICE });
      const response = await $api.post(
        `${process.env.REACT_APP_API_URL_DEVICE}/`,
        {
          newDevice,
          info,
        }
      );
      dispatch({
        type: ActionDevice.ADD_DEVICE_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionDevice.ADD_DEVICE_ERROR,
        payload: "Не удалось добавить устройство",
      });
    }
  };
};
