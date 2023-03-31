import bcrypt from 'bcrypt' //for hashing passwords
import jwt from 'jsonwebtoken' //for authentication and authorization
import User from '../models/User.js'

//Sign-up user
export const signup = async (req, res) => {
    try {
      const salt = await bcrypt.genSalt()
      const passwordHash = await bcrypt.hash(req.body.password, salt)

      //CREATING NEW USER - data coming in from client side - register form
      const newUser = new User({
        ...req.body,
        //hashing password
        password: passwordHash,
        viewedProfile: Math.floor(Math.random() * 1000),
        impressions: Math.floor(Math.random() * 1000)
      })

      const savedUser = await newUser.save()
      res.status(201).json(savedUser) //sending the user back after
    } catch (err) {
        res.status(500).json({error: err.message })
    }
}

// Login
export const login = async (req, res) => {
    try {
      //USER Auth - data coming in from client side - login form
       const { email, password } = req.body
       const user = await User.findOne({ email }) //i.e email: email
       if (!user) return res.status(400).json({ msg: 'User does not exist.' }) 

       const isMatch = await bcrypt.compare(password, user.password)
       if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials!' })

       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
       delete user.password
       res.status(200).json({ token, user })

    } catch (err) {
        res.status(500).json({error: err.message })
    }
}