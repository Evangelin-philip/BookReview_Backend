require('dotenv').config()
const users = require("../models/userModel");
const jwtWebToken = require("jsonwebtoken");
const bcrypt = require('bcrypt');

exports.registerController = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await users.findOne({ email });
      if (existingUser) {
        res.status(409).json("Registration Failed!!! User Already Exists...");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new users({
   
          username,
          email,
          password: hashedPassword,  // Save hashed password to the "password" field
        });
  
        await newUser.save();
        res.status(200).json(newUser);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  exports.loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await users.findOne({ email });
      if (!existingUser) {
        return res.status(404).json("No account associated with this email");
      }
  
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.status(401).json("Incorrect password");
      }
   
      const token = jwtWebToken.sign(
      
        
        { userMail: existingUser.email,userName:existingUser.username },
        process.env.SECRET_KEY,
        // { expiresIn: '1h' } // optional: set token expiry
      );
  
      res.status(200).json({ user: existingUser, token });
    } catch (err) {
      res.status(500).json(err);
    }
  };
  