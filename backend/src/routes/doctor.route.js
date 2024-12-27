import { Router } from 'express';
import { getAllDoctors, getSlotsByDoctorId } from '../controllers/doctor.controller.js';

const router = Router();

router.route('/getAllDoctor').get( getAllDoctors );
router.route('/getSlotsByDoctorId/:doctorId/slots').get( getSlotsByDoctorId );

export {
  router as doctorRoutes,
}