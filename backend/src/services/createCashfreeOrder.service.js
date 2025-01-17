import { Cashfree } from '../config/cashfree.config';

const createCashfreeOrder = async (orderData) => {

  try {
    const response = await Cashfree.PGCreateOrder("2023-08-01", orderData);
    return response.data;
  } catch (error) {
    console.error("error while creating the order", error);
    throw error;
  }
}

export {
  createCashfreeOrder
};