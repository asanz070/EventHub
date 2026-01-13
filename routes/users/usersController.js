// ECHO is on.
const User = require('./usersModel')

const getAllUsers = async () => {
    try {
        const findUser = await User.find();
        return findUser
    } catch (error) {
        throw error
    }
}

const getUserById = async (id) => {
    try {
        const userId = await User.findById(id);
        return userId
    } catch (error) {
        throw error
    }
}

const createUser = async (userData) => {
    try {
        const newUser = await User.create(userData)
        return newUser
    } catch (error) {
        throw error
    }
}

module.exports = { getAllUsers, createUser, getUserById }