import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res,next) => {
  const {username,email,password} = req.body;

  if(!username || !email || !password || username === '' || email=== '' || password === ''){
    return next(errorHandler(400,"All fields are required"))
    }

  const hashedPassword = bcryptjs.hashSync(password,10);


  const newUser = new User({username,email,password:hashedPassword});

  try {
    await newUser.save();
    res.json({ message: "Signup success" });
    
  } catch (error) {
   
    next(error);
    
  }

   
}

export const signin = async (req, res,next) => {
 const {email,password} = req.body;

  if(!email || !password || email === '' || password === ''){
   return next(errorHandler(400,"All fields are required"))
  }
try {
    const validUser = await User.findOne({ email })
    
     if (!validUser) {
       return next(
         errorHandler(
           400,
           "User with that email does not exist. Please signup."
         )
       );
     }

     // Compare passwords
     const validPassword = bcryptjs.compareSync(password, validUser.password);
     if (!validPassword) {
       return next(errorHandler(400, "password do not match"));
     }


     // Generate token
     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

     const { password:pass, ...rest } = validUser._doc;

     // Persist the token as 'access_token' in cookie with expiry date
     res.status(200).cookie("access_token", token, {httpOnly:true}).json(rest);

     // Return response with user and token to frontend client
    //  const { _id, username, email } = user;
    //  return res.json({ token, user: { _id, username, email } });
  
  
} catch (error) {
  next(error)
  
}
 
  
} 