import { Dispatch } from "redux";
import axios from "axios";
import $api from "../../http/axios";
import { ActionBrands, brandAction } from "../../types/brand";

export const fetchBrands = () => {
  return async (dispatch: Dispatch<brandAction>) => {
    try {
      dispatch({ type: ActionBrands.FETCH_BRANDS });
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_BRAND}/getBrands`
      );
      dispatch({
        type: ActionBrands.FETCH_BRANDS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionBrands.FETCH_BRANDS_ERROR,
        payload: "Не удалось получить бренды",
      });
    }
  };
};

export const addBrand = (name: string) => {
  return async (dispatch: Dispatch<brandAction>) => {
    try {
      dispatch({ type: ActionBrands.ADD_BRANDS });
      const response = await $api.post(
        `${process.env.REACT_APP_API_URL_BRAND}/`,
        {
          name,
        }
      );
      dispatch({
        type: ActionBrands.ADD_BRANDS_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionBrands.FETCH_BRANDS_ERROR,
        payload: "Не удалось добавить бренд",
      });
    }
  };
};
