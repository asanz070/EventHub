// ECHO is on.
const Booking = require('./bookingsModel')

const { getEventById, updateEvent } = require('../events/eventsController')

const createBooking = async (bookingData) => {
    try {
        /*
            The user creates a booking for a certain event

            We need to calculate the total price of that event (quantity * price)
            -- quantity - bookingData.quantity
            -- price - event - bookingData.event
            -- Event we need <- getEventById(bookingData.event)
        */
        const event = await getEventById(bookingData.event);

        const totalPrice = event.price * bookingData.quantity;
        bookingData.totalPrice = totalPrice;

        // subtract from available tickets
        const newAvailableTickets = event.availableTickets - bookingData.quantity;

        // update event with new amount of tickets
        await updateEvent(bookingData.event, { availableTickets: newAvailableTickets })

        // create the new booking
        const booking = await Booking.create(bookingData)

        // return the booking results
        return booking
    } catch (error) {
        throw error
    }
}

module.exports = { createBooking }