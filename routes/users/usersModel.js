// ECHO is on.
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            unque: true,
            required: true
        },
        phone: {
            type: String,
            unique: true
        }
    },

    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User