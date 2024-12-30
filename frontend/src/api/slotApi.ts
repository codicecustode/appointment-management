import axios from 'axios';
import { ISlotForm } from '../types/slot.form.type';
const API_URL = `${import.meta.env.VITE_APP_API_URL}/slot`;

export const fetchAllSlots = async (doctorId: string) => {
  try {
    const response = await axios.get(API_URL + `/get-all-slots-by-doctor-id/${doctorId}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message, doctors: [] };
    }
    return { message: 'An unknown error occurred', doctors: [] };
  }

}

export const createSlot  = async ( slotData: ISlotForm) => {
  try {
    const response = await axios.post(API_URL + '/create-slot', slotData);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message, slot: null };
    }
    return { message: 'An unknown error occurred', slot: null };
  }
}