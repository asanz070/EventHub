// ECHO is on.
const express = require('express');
const router = express.Router()

const { getAllEvents, getEventById, createEvent } = require('./eventsController');

router.get('/', async (request, response) => {
    try {
        const findEvent = await getAllEvents(request.query);
        response.status(200).json({ message: 'success', payload: findEvent })
    } catch (error) {
        response.status(500).json({ message: 'failure', payload: error.message })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const eventId = await getEventById(request.params.id);
        response.status(200).json({ message: 'success', payload: eventId })
    } catch (error) {
        response.status(500).json({ message: 'failure', payload: error.message })
    }
})

router.post('/', async (request, response) => {
    try {
        const newEvent = await createEvent(request.body);
        response.status(200).json({ message: 'success', payload: newEvent })
    } catch (error) {
        response.status(500).json({ message: 'failure', payload: error.message })
    }
})

module.exports = router