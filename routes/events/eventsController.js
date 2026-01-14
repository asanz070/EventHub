// ECHO is on.
const Event = require('./eventsModel')

const getAllEvents = async (queryData) => {
    try {
        const filterObject = {};

        /*
            -- We want to create an object the keeps track of keys that we want to filter by, as well as their values
            {
                category: queryData.category
                location: queryData.location
                minPrice: queryData.minPrice
            }
        */

        if (queryData.category) {
            filterObject.category = queryData.category
        }

        // range with minPrice and maxPrice
        // Built in directives from mongoose that we can use
        // $gte - greater than or equal to
        // $lte - less than or equal to
        const minPrice = 0;
        const maxPrice = Infinity;

        filterObject.price = {
            $gte: queryData.minPrice || minPrice, // check if we have a min price query. If not use default variable
            $lte: queryData.maxPrice || maxPrice,
        };

        // if (queryData.minPrice && queryData.maxPrice) {
        //     // get items in range of minPrice and maxPrice
        //     filterObject.price = {
        //         $gte: queryData.minPrice,
        //         $lte: queryData.maxPrice
        //     }
        // } else if (queryData.minPrice) {
        //     filterObject.price = {
        //         $gte: queryData.minPrice
        //     }
        // } else if (queryData.maxPrice) {
        //     filterObject.price = {
        //         $lte: queryData.maxPrice
        //     }
        // }

        const sortObject = {};
        // figure out which property to sort by
        if (queryData.sortBy) {
            // object bracket notation allows us to evaluate keys

            // This is the equivalent of doing: "sortObject.price = 1"
            // queryData.sortBy = "price"
            // sortObject[queryData.sortBy]
            // [queryData.sortBy] will evaluate to its value ("price")
            // bracket notation [] with objects allows for dynamic keys
            sortObject[queryData.sortBy] = queryData.sortOrder || 'asc';
        }

        // figure out if it's asc or desc

        // {price: asc}
        // .sort - built in mongoose sort function
        // .sort will sort utilizing an object
        // .sort({ propertyToSortBy: sortOrder })
        // sortOrder can be ascending: "asc", "ascending", 1
        // or descending: "descending" "desc", -1
        // we can grab the property to sort by utilizing queries

        const findEvent = await Event.find(filterObject).sort(sortObject);
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

const updateEvent = async (eventId, eventData) => {
    try {
        const updatedResult = await Event.findByIdAndUpdate(
            eventId,
            eventData,
            { new: true }
        )
        return updatedResult
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { getAllEvents, getEventById, createEvent, updateEvent }