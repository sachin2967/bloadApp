import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';



dotenv.config();

mongoose.connect(
 process.env.MONGO
).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => { 
  console.log(err);
});



const app = express();
const port = 3000;

// Define your routes here
app.use('/api/user', userRoutes);

// Add more routes here as needed

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});