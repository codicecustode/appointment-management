import { Slot } from '../models/slot.model.js';
import { Doctor } from '../models/doctor.model.js';
const createSlot = async (req, res) => {

  const session = await Doctor.startSession();
  try {
    await session.withTransaction(async () => {
      const { patientName, patientEmail, patientPhone, visitingTime, slotNumber, doctorId } = req.body;

      // Validate required fields
      if (!patientName || !patientEmail || !patientPhone || !visitingTime || !slotNumber || !doctorId) {
        return res.status(400).json({
          message: 'All fields are required',
          slot: {}
        });
      }

      //find the doctor with id doctorId
      const doctor = await Doctor.findOne({ uniqueId: doctorId }).session(session);

      //return if doctor not found
      if (!doctor) {
        return res.status(404).json({
          message: 'Doctor not found',
          slot: {}
        });
      }

      //populate the doctor with slots
      const populatedDoctor = await doctor.populate({
        path: 'slots',
        options: { session }
      });
      //console.log(populatedDoctor.slots, 'populatedDoctor.slots')
      //check if the slot already exists
      const choosenSlot = populatedDoctor.slots.find(slot => slot.slotNumber === slotNumber);
      const isChoosenSlotBooked = choosenSlot && choosenSlot.status === 'booked';
      
      if (!choosenSlot) {
        return res.status(404).json({
          message: 'Slot not found',
          slot: {}
        });
      }

      if (isChoosenSlotBooked) {
        console.log('Slot already booked');
        return res.status(409).json({
          message: 'Slot already booked',
          slot: {}
        });
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

      //update the doctor with the new slot
      choosenSlot.slotId = slot._id;
      choosenSlot.status = 'booked';
      await doctor.save({ session });

      return res.status(200).json({
        message: 'Slot created successfully',
        slot
      });
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      slot: {}
    });
  } finally {
    session.endSession();
  }
}

const getAllSlotsByDoctorId = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const doctor = await Doctor.find({ uniqueId: doctorId }).populate('slots');
    const allSlotsOfDoctor = doctor[0].slots;

    return res.status(200).json({
      message: 'All slots fetched successfully',
      slots: allSlotsOfDoctor
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
      slots: [],
    });
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
  getAllFreeSlotsOfDoctor,
  getAllSlotsByDoctorId
}