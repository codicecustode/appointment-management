import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import connectDB from './src/database/db.connection.js';

dotenv.config();

const app = express();
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));

// Connect to MongoDB
connectDB();


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost/${process.env.PORT}`);
})
