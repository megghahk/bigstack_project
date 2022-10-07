const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
    username: {
        type:String,
    },
    profilepic: {
        type: String,
        default:'https://www.timeoutsharjah.com/public/styles/full_img/public/images/2020/09/29/avatar_2.jpg?itok=3K6gk5_O'
    },
    date: {
        type: Date,
        default:Date.now
    }

})
module.exports = Person = mongoose.model("myPerson", PersonSchema)
