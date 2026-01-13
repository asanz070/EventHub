# EventHub API Project

## Project Overview

You will design and build the backend for **EventHub**, a basic event management system.
You will:

- Design MongoDB models for key entities
- Build a RESTful API using Node.js, Express, and Mongoose
- Implement filtering and sorting on event listings
- Handle relationships between collections using Mongoose references
- Develop clean and modular code with proper error handling

---

## Key Features

### Events

- CRUD operations
- Suggested fields:
  - `title` _(string)_
  - `description` _(string)_
  - `date` _(date)_
  - `location` _(string)_
  - `category` _(string)_ _(e.g., concert, conference, workshop)_
  - `price` _(number)_
  - `availableTickets` _(number)_
- Events should support **filtering and sorting** through query parameters:
  - Filter by category, date range, and price range
  - Sort by date or price (ascending or descending)

#### Example Query:

```
GET /events?category=conference&minPrice=10&maxPrice=100&startDate=2025-01-01&sort=-date
```

---

### Users

- CRUD operations
- Suggested fields:
  - `name` _(string)_
  - `email` _(string)_
  - `phone` _(string)_

---

### Bookings

- Users can book tickets for events
- Suggested fields:
  - `user` _(reference to User)_
  - `event` _(reference to Event)_
  - `quantity` _(number)_
  - `totalPrice` _(calculated from event price and quantity)_
  - `status` _("confirmed", "cancelled")_
- Endpoints should allow:
  - Creating a booking
  - Updating or cancelling a booking
  - Viewing all bookings for a user
- Decrease available tickets when a booking is made

---

## Project Guidelines

- Structure your project using **Models**, **Routes**, and **Controllers**
- Use Mongoose references to relate bookings to users and events
- Use `.populate()` where appropriate to return related data

---
