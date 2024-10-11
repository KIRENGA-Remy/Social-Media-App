import bcrypt from 'bcrypt'
import User from '../models/User'
import jwt from 'jsonwebtoken'

const register = async (req,res) => {
  try {
    const {
      email, 
      firstName, 
      lastName, 
      password, 
      occupation, 
      friends, 
      picturePath, 
      viewedProfile, 
      impressions,
      location,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      email, 
      firstName, 
      lastName, 
      password: hashedPassword, 
      occupation, 
      friends, 
      picturePath, 
      viewedProfile: Math.floor(Math.random() * 10000), 
      impressions: Math.floor(Math.random() * 10000),
      location
    })
    const savedUser = await newUser.save()
    res.status(200).json({message: "User created", savedUser})
  } catch (err) {
    res.status(500).json({ error: err.message})
  }
}


