import axios from "axios";
import { apiEndPoint, baseUrl } from "../constants";

export const createQuiz = async (quizData) => {
  try {
    const response = await axios.post(
      `${baseUrl}${apiEndPoint.quizCreate}`,
      quizData,
      {
        headers: {
          "auth-token": `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
