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








  export {
    getAllDoctors
  }

