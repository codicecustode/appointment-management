import { Router } from 'express';
import { createPaymentSession } from '../controllers/payment.cashfree.controller.js';


const router = Router();

router.route('/create-session').post(createPaymentSession);
export {
  router as paymentRoutes,
}