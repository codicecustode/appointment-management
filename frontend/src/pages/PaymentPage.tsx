import { useEffect } from "react";
import axios from "axios";

const PaymentPage = () => {
  useEffect(() => {
    // Ensure the Cashfree SDK is loaded before using it
    if (!(window as any).Cashfree) {
      console.error("Cashfree SDK not loaded. Ensure the script is added in index.html.");
    }
  }, []);

  const handlePayment = async () => {
    try {
      // Initialize Cashfree
      const cashfree = (window as any).Cashfree({
        mode: "sandbox", // Change to "production" for live
      });

      // Make API request to create a payment session
      const response = await axios.post("http://localhost:3000/api/v1/payment/create-session", {
        bookingId: "BKG12345",
        phoneNumber: "+919876543210",
        email: "john.doe@example.com",
        amount: 1500.75,
      });

      const sessionId = response.data.payment_session_id;

      // Log session ID for debugging
      console.log("Payment Session ID:", sessionId);

      // Call Cashfree checkout
      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_self", // Open in the current tab
      };
      cashfree.checkout(checkoutOptions);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Click below to open the checkout page in the current tab:</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
