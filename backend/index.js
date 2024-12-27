import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectDB from './src/database/db.connection.js';
import { doctorRoutes } from './src/routes/doctor.route.js';

dotenv.config();

const app = express();
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

// Connect to MongoDB
connectDB();

app.use('/api/v1/doctor', doctorRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost/${process.env.PORT}`);
})
