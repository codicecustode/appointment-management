import mongoose, { Schema } from 'mongoose';

const slotSchema = new Schema({
  doctorId: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  patientPhone: {
    type: String,
    required: true,
    index: true,
  },
  visitingTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['booked', 'cancelled', 'completed', 'missed'],
    default: 'booked',
  },
  slotNumber: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export const Slot = mongoose.model('Slot', slotSchema);