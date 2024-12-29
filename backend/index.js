import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Doctor } from './src/models/doctor.model.js';

import connectDB from './src/database/db.connection.js';
import { doctorRoutes } from './src/routes/doctor.route.js';
import { slotRouter } from './src/routes/slot.route.js';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

// Connect to MongoDB
connectDB();

app.use('/api/v1/doctor', doctorRoutes);
app.use('/api/v1/slot', slotRouter);




app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost/${process.env.PORT}`);
})
