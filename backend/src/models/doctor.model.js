import mongoose, { Schema } from 'mongoose';

const doctorSchema = new Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  slots: [{
    type: Schema.Types.ObjectId,
    ref: 'Slot',
  }],
  maxSlots: {
    type: Number,
    default: 10,
  },
}, { timestamps: true });

export const Doctor = mongoose.model('Doctor', doctorSchema);


