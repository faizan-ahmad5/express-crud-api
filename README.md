
# User Management API

This is a simple Express.js API for managing users, allowing you to perform basic CRUD (Create, Read, Update, Delete) operations.

## Table of Contents

- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)
  - [Get All Users](#get-all-users)
  - [Add a User](#add-a-user)
  - [Update a User](#update-a-user)
  - [Delete a User](#delete-a-user)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies

- Node.js
- Express.js

## API Endpoints

### Get All Users

- **Endpoint:** `GET /api/users`
- **Description:** Fetches all users from the array.
- **Response:**
  ```json
  {
    "message": "Fetching all users",
    "users": [
      {
        "id": 1,
        "name": "Faizan Ahmad",
        "email": "faizan@gmail.com",
        "age": 20
      },
      ...
    ]
  }
  ```

### Add a User

- **Endpoint:** `POST /api/users`
- **Description:** Adds a new user to the array.
- **Request Body:**
  ```json
  {
    "name": "New User",
    "email": "newuser@gmail.com",
    "age": 25
  }
  ```
- **Response:**
  ```json
  {
    "message": "User added successfully",
    "newUser": {
      "id": 4,
      "name": "New User",
      "email": "newuser@gmail.com",
      "age": 25
    }
  }
  ```

### Update a User

- **Endpoint:** `PUT /api/users/:id`
- **Description:** Updates an existing user.
- **Request Body:**
  ```json
  {
    "name": "Updated Name",
    "email": "updatedemail@gmail.com",
    "age": 30
  }
  ```
- **Response:**
  ```json
  {
    "message": "User 1 updated successfully",
    "data": {
      "id": 1,
      "name": "Updated Name",
      "email": "updatedemail@gmail.com",
      "age": 30
    }
  }
  ```

### Delete a User

- **Endpoint:** `DELETE /api/users/:id`
- **Description:** Deletes a user by ID.
- **Response:**
  ```json
  {
    "message": "User 1 deleted successfully",
    "deletedUser": [
      {
        "id": 1,
        "name": "Faizan Ahmad",
        "email": "faizan@gmail.com",
        "age": 20
      }
    ]
  }
  ```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/faizan-ahmad5/express-crud-api.git
   cd your-express-crud-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

2. You can test the API endpoints using Postman or any other API client.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

