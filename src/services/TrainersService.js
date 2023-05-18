import axios from "axios";
const TRAINERS_API_BASE_URL = "http://localhost:8080/api";

const getTrainersFullNames = async () => {
  try {
    const response = await axios.get(`${TRAINERS_API_BASE_URL}/trainers`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

const getTrainersAvailability = async (trainerName) => {
  try {
    const response = await axios.get(
      `${TRAINERS_API_BASE_URL}/availability/${trainerName}`
    );
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};

export { getTrainersFullNames, getTrainersAvailability };
