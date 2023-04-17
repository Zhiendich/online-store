import axios from "axios";
import { IDevice } from "../types/device";

export const fetchDevice = async (id: string): Promise<IDevice | undefined> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL_DEVICE}/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
