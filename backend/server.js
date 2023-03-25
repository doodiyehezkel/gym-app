require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')


const coachAuthRouter = require('./routes/auth/coach')
const traineeAuthRouter = require('./routes/auth/trainee')
const commonAuthRouter = require('./routes/auth/common')

const coachRouter = require('./routes/coach')
const traineeRouter = require('./routes/trainee')

const { authMiddleware } = require('./middleware/auth-middleware')

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

//router
app.use('/auth/coach', coachAuthRouter)
app.use('/auth/trainee', traineeAuthRouter)
app.use('/auth/common', commonAuthRouter)

app.use('/coach', authMiddleware, coachRouter)
app.use('/trainee', authMiddleware, traineeRouter)

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

