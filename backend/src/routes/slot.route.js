import { Router } from 'express';
import { createSlot, getAllSlotsByDoctorId } from '../controllers/slot.controller.js';
const router = Router();

router.route('/create-slot').post( createSlot );
router.route('/get-all-slots-by-doctor-id/:doctorId').get( getAllSlotsByDoctorId );

export {
  router as slotRouter
}