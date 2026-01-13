const express = require('express')
const router = express.Router()

const { createUser, getAllUsers, getUserById } = require('./userController')

router.get('/', async (request, response) => {
    try {
        const findUser = await getAllUsers();
        response.status(200).json({ message: 'success', payload: findUser })
    } catch (error) {
        response.status(500).json({ message: 'failure', payload: error.message })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const userId = await getUserById(request.params.id);
        response.json({ message: 'success', payload: userId })
    } catch (error) {
        response.status(500).json({ message: 'failure', payload: error.message })
    }
})

router.post('/', async (request, response) => {
    try {
        const newUser = await createUser(request.body);
        response.status(200).json({ message: 'success', payload: newUser })
    } catch (error) {
        response.status(500).json({ message: 'failure', payload: error.message })
    }
})

module.exports = router