import { Router } from 'express';
import { getAllDoctors } from '../controllers/doctor.controller.js';

const router = Router();

router.route('/getAllDoctor').get( getAllDoctors );

export {
  router as doctorRoutes,
}