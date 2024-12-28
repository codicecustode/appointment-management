import mongoose, { Schema } from 'mongoose';

const slotSchema = new Schema({
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
  },
  visitingTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['booked', 'cancelled', 'completed', 'missed'],
    default: 'pending',
  },
  slotNumber: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export const Slot = mongoose.model('Slot', slotSchema);