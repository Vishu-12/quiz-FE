import axios from "axios";
import { apiEndPoint, baseUrl } from "../constants";
export const register = async (data) => {
  try {
    const response = await axios.post(
      `${baseUrl}${apiEndPoint.register}`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}${apiEndPoint.login}`, data);
    return response;
  } catch (error) {
    return error;
  }
};
