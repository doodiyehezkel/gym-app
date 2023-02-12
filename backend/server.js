require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')

const workoutsRouter = require('./routes/workouts')
const userRouter = require('./routes/user')
const userSchema = require('./models/user')

const { authMiddleware } = require('./controllers/user')

//env var
const PORT = process.env.PORT
const MONGO_DB_URI = process.env.MONGO_DB_URI

//express app
const app = express()

//middleware
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next()
})

//routes
app.use('/auth', userRouter)
app.use('/workouts', authMiddleware, workoutsRouter)

//mongo
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`connect to db & server started on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

