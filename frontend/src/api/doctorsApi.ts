import axios from 'axios';

const API_URL = `${import.meta.env.VITE_APP_API_URL}/doctor`;

export const getAllDoctors = async () => {
  try {
    const response = await axios.get(API_URL + '/getAllDoctor');
    console.log("a",response.data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message, doctors: [] };
    }
    return { message: 'An unknown error occurred', doctors: [] };
  }
}

export const getDoctorSlots = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/slots`);
    return response.data;
  }catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message, slots: [] };
    }
    return { message: 'An unknown error occurred', slots: [] };
  }
}