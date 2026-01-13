// ECHO is on.
const express = require("express");
const logger = require("morgan");
const connectToMongoDB = require("./database/connectToMongoDB")

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(logger("dev"))

const userRouter = require('./routes/users/usersRouter')
app.use('/api/user', userRouter)

const eventRouter = require('./routes/events/eventsRouter')
app.use('/api/event', eventRouter)

const bookingRouter = require('./routes/bookings/bookingsRouter')
app.use('/api/booking', bookingRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
    connectToMongoDB();
})