const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const passport = require("passport")

//bring all notes
const auth = require('./routes/api/auth')
const profile = require('./routes/api/profile')
const questions = require('./routes/api/questions')


const app = express()

//Middleware for body-parser or express
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json()) //required by auth

//mongoDB configuration
const db = require('./setup/myurl').mongoURL

//attempt to connect to database
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connected successfully'))
    .catch(err => console.log(err))

//passport middleware
app.use(passport.initialize());

//Config for JWT strategy
require("./strategies/jsonwtStrategy.js")(passport);

//actual route
app.use('/api/auth',auth)
app.use('/api/profile', profile)
app.use('/api/questions', questions)


//just for testing -> route
app.get("/", (req, res) => {
    res.send('hey there ')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`app is running at port ${port}`)
})