import axios from "axios";
import { IDevice } from "../types/device";

export const addRating = async (
  deviceId: string,
  userId: number,
  rate: number
) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL_RATING}`, {
      deviceId,
      userId,
      rate,
    });
  } catch (error) {
    console.log(error);
  }
};
