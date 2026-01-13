// ECHO is on.
const Event = require('./eventsModel')

const getAllEvents = async () => {
    try {
        const findEvent = await Event.find();
        return findEvent
    } catch (error) {
        throw new Error(error);
    }
}

const getEventById = async (id) => {
    try {
        const eventId = await Event.findById(id);
        return eventId
    } catch (error) {
        throw error
    }
}

const createEvent = async (eventData) => {
    try {
        const newEvent = await Event.create(eventData)
        return newEvent
    } catch (error) {
        throw error
    }
}

module.exports = { getAllEvents, getEventById, createEvent }