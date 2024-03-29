import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer, { diskStorage } from 'multer'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import { createPost } from './controllers/posts.js'
import { signup } from "./controllers/auth.js";
import { verifyToken } from './middleware/auth.js'
import User from './models/User.js'
import Post from './models/Post.js'
import { users, posts } from './seeds/index.js'

// configs: 
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan('common'))
app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

//Setting up file storage - multer (https://github.com/expressjs/multer#diskstorage)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage})

//ROUTES w/ files
  /* NOTE: not moving this route to routes dir b/c we need multer's upload middleware */
app.post("/auth/register", upload.single("picture"), signup);
app.post('/posts', verifyToken, upload.single("picture"), createPost) 

/* ROUTES */
  //Auth routes:
app.use("/auth", authRoutes);
  //User routes:
app.use('/users', userRoutes);
  //Post routes
app.use('/posts', postRoutes);


// Mongoose setup 
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    
    /* injecting the mock data --> NOTE: Run One time only  */
    // User.insertMany(users)
    // Post.insertMany(posts)
  })
  .catch((error) => console.log(`${error} did not connect`));
