// ECHO is on.
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookingSchema = new mongoose.Schema(
    {
        // user
        user: {
            type: ObjectId,
            ref: "User", // ref us for the name dof the model that we want to reference!
            required: true
        },
        // event
        event: {
            type: ObjectId,
            ref: 'Event',
            required: true
        },
        quantity: {
            type: Number,
            min: 1,
            required: true
        },
        totalPrice: {
            type: Number
        },
        status: {
            type: String,
            default: 'confirmed'
        }
    },
    
    {
        timestamps: true
    }
)

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking