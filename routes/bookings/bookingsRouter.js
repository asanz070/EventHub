// ECHO is on.
const express = require('express');
const { createBooking } = require('./bookingsController');
const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const newBooking = await createBooking(request.body)
        response.status(200).json({ message: 'success', payload: newBooking })
    } catch (error) {
        response.status(500).json({ message: 'failure', payload: error.message })
    }
})

module.exports = router