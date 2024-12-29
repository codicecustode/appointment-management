import { Slot } from '../models/slot.model.js';
import { Doctor } from '../models/doctor.model.js';
const createSlot = async (req, res) => {
  //start a session
  const session = await Doctor.startSession();
  try {
    session.withTransaction(async () => {
      const { patientName, patientEmail, patientPhone, visitingTime, slotNumber, doctorId } = req.body;

      // Validate required fields
      if (!patientName || !patientEmail || !patientPhone || !visitingTime || !slotNumber || !doctorId) {
        throw new Error('Missing required fields');
      }

      //find the doctor with id doctorId
      const doctor = await Doctor.findOne({ uniqueId: doctorId }).session(session);

      //return if doctor not found
      if (!doctor) {
        throw new Error('Doctor not found');
      }

      //populate the doctor with slots
      const populatedDoctor = await doctor.populate({
        path: 'slots',
        options: { session }
      });

      //check if the slot already exists
      const isSlotExist = populatedDoctor.slots.find(slot => slot.slotNumber === slotNumber);

      //return if slot already exists
      if (isSlotExist) {
        throw new Error('Slot already booked');
      }

      //create a new slot if slot does not exists
      const slot = await new Slot({
        doctorId,
        patientName,
        patientEmail,
        patientPhone,
        visitingTime,
        slotNumber
      }).save({ session });

      //return created slot if created successfully
      const createdSlotId = slot._id;

      //push the slot id in doctor's slots array
      doctor.slots.push(createdSlotId);
      await doctor.save({ session });

      return res.status(201).json({
        message: 'Slot created successfully',
        slot
      });

    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      slot: {}
    });
  } finally {
    session.endSession();
  }
}

const getAllFreeSlotsOfDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;
    //check if doctorId is provided
    if (!doctorId) {
      throw new Error('Doctor id is required');
    }
    //find the doctor with id doctorId
    const doctor = await Doctor.findOne({ uniqueId: doctorId });
    //return if doctor not found
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    //populate the doctor with slots
    const populatedDoctor = await doctor.populate('slots');

    //get all slots of doctor
    const allSlots = populatedDoctor.slots;

    //filter the free slots
    const freeSlots = allSlots.filter(slot => slot.status === 'available');
    //return the free slots
    return res.status(200).json({
      message: 'Free slots fetched successfully',
      slots: freeSlots
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      slots: []
    });
  }
}



export {
  createSlot,
  getAllFreeSlotsOfDoctor
}