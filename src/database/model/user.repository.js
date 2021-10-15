const mongoose = require('mongoose')

const User = mongoose.model('users', {
    name: String,
    last_name: String,
    address: String,
    birthday: Date,
    telephone: Number,
    email: {
        type: String,
        unique: true
    },
    password: String,
    location: Object
})

module.exports = User