import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/slot`;

export const fetchAllSlots = async (doctorId: string) => {
  try {
    const response = await axios.get(API_URL + `${doctorId}/getAllSlots`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message, doctors: [] };
    }
    return { message: 'An unknown error occurred', doctors: [] };
  }

}