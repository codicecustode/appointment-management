import { createCashfreeOrder } from '../services/payment.cashfree.service.js';

const createPaymentSession = async (req, res) => {

  try {

    const { bookingId, phoneNumber, email, amount } = req.body;
    console.log(bookingId, phoneNumber, email, amount);

    let orderData = {
      "order_amount": `${amount}`,
      "order_currency": "INR",
      "customer_details": {
        "customer_id": `${bookingId}`,
        "customer_name": "node_sdk_test",
        "customer_email": `${email}`,
        "customer_phone": `${phoneNumber}`
      },
      "order_meta": {
        "return_url": "https://test.cashfree.com/pgappsdemos/return.php?order_id=order_123"
      },
      "order_note": ""
    }

    const response = await createCashfreeOrder(orderData);

    return res.status(200).json({
      message: "Payment Session Created",
      payment_session_id: response.payment_session_id
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
