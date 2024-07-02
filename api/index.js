import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import signupRoutes from './routes/auth.route.js';

const app = express();
const port = 3000;



app.use(express.json());

dotenv.config();

mongoose.connect(
 process.env.MONGO
).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => { 
  console.log(err);
});




// Define your routes here
app.use('/api/user', userRoutes);
app.use('/api/auth', signupRoutes);

// Add more routes here as needed

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});