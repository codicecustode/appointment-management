import { Cashfree } from "../config/cashfree.config";
import { createCashfreeOrder } from "../services/createCashfreeOrder.service";

const createPaymentSession = async (req, res) => {

  try {

    const { booking_id, phone_number, email, amount } = req.body;
    console.log(booking_id, phone_number, email, amount);

    let orderData = {
      "order_amount": `${amount}`,
      "order_currency": "INR",
      "customer_details": {
        "customer_id": `${booking_id}`,
        "customer_name": "node_sdk_test",
        "customer_email": `${email}`,
        "customer_phone": `${phone_number}`
      },
      "order_meta": {
        "return_url": "https://test.cashfree.com/pgappsdemos/return.php?order_id=order_123"
      },
      "order_note": ""
    }

    const response = await createCashfreeOrder(orderData);

    return res.status(200).json({
      message: "Payment Session Created",
      data: response.data
    });


  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export {
  createPaymentSession
};
