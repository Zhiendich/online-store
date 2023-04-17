import { Dispatch } from "redux";
import axios from "axios";
import { ActionTypes, typeAction } from "../../types/type";
import $api from "../../http/axios";

export const fetchTypes = () => {
  return async (dispatch: Dispatch<typeAction>) => {
    try {
      dispatch({ type: ActionTypes.FETCH_TYPES });
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL_TYPE}/getTypes`
      );
      dispatch({
        type: ActionTypes.FETCH_TYPES_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.FETCH_TYPES_ERROR,
        payload: "Не удалось получить типы",
      });
    }
  };
};

export const addType = (name: string) => {
  return async (dispatch: Dispatch<typeAction>) => {
    try {
      dispatch({ type: ActionTypes.ADD_TYPES });
      const response = await $api.post(
        `${process.env.REACT_APP_API_URL_TYPE}/`,
        {
          name,
        }
      );
      dispatch({
        type: ActionTypes.ADD_TYPES_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.ADD_TYPES_ERROR,
        payload: "Не удалось добавить тип",
      });
    }
  };
};
