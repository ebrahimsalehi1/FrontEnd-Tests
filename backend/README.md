# My Backend Project

This is a backend project designed to handle user management, including registration, authentication, and authorization. The project is built using Node.js, Express, and json-server.

## Project Structure

```
my-backend-project
├── backend
│   ├── src
│   │   ├── app.js                # Entry point of the application
│   │   ├── routes
│   │   │   └── userRoutes.js     # User-related routes
│   │   ├── controllers
│   │   │   └── userController.js  # Logic for user operations
│   │   ├── models
│   │   │   └── userModel.js       # User data structure
│   │   └── db
│   │       └── db.json            # Mock database
│   ├── package.json               # NPM configuration
│   ├── README.md                  # Project documentation
│   └── .env                       # Environment variables
├── frontend                       # Frontend directory
└── README.md                     # Frontend documentation
```

## Technologies Used

- Node.js
- Express
- json-server
- bcrypt (for password hashing)
- jsonwebtoken (for authentication)

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-backend-project/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```
   PORT=3000
   ```

4. Start the server:
   ```
   npm start
   ```

## Usage

- **Register a User**: Send a POST request to `/api/users/register` with user details (firstName, lastName, email, password).
- **Login a User**: Send a POST request to `/api/users/login` with email and password.
- **Get User Details**: Send a GET request to `/api/users/:id` with the user ID.

## Security Considerations

- Passwords are hashed using bcrypt before being stored in the database.
- JWT is used for secure authentication and authorization.

## Extra Features

- User confirmation status and confirmation date are included in the user model to track user verification.
- Consider implementing additional features such as email verification and password reset functionality for enhanced user management.