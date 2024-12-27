import { Doctor } from '../models/doctor.model.js';

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    return res.status(200).json({
      size: doctors.length,
      message: 'All doctors fetched successfully',
      doctors,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      doctors: [],
    });
  }
}

const getSlotsByDoctorId = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const slotOfDocotr = await Doctor.find({ _id: doctorId }, { slots: 1 });
    if (slotOfDocotr.length === 0) {
      return res.status(404).json({
        message: 'Doctor slot not found',
        slots: [],
      });
    } else {
      return res.status(200).json({
        message: 'Doctor slot fetched successfully',
        slots: slotOfDocotr[0].slots,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      slots: [],
    });
  }
}




  export {
    getAllDoctors,
    getSlotsByDoctorId
  }

