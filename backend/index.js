import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors({
  origin: '*',
  methods: 'GET,POST,PUT,DELETE',
}));





app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost/${process.env.PORT}`);
})
