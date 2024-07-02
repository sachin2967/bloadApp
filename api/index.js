import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import signupRoutes from './routes/auth.route.js';
import cookieParser from "cookie-parser";
import postRoutes from './routes/post.route.js';
import commentRoutes from "./routes/comment.route.js";


const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use(express.json());
app.use(cookieParser());

dotenv.config();

mongoose.connect( process.env.MONGO).then(() => {console.log('Connected to MongoDB');}).catch((err) => { console.log(err);});




// Define your routes here
app.use('/api/user', userRoutes);
app.use('/api/auth', signupRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500 ;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message});
});



