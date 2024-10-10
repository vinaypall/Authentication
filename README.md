# Authentication Service

This project provides user authentication functionality using JSON Web Tokens (JWT) for securely handling user sessions.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: [Download and Install Node.js](https://nodejs.org)
- **MongoDB**: MongoDB should be installed locally and running. You can download it [here](https://www.mongodb.com/try/download/community).

Clone the repository to your local machine:
Navigate to the project directory:
Install all dependencies: npm install
connect your mongodb

Authentication Flow
Sign Up: Users can register by providing their email and password.
Login: Registered users can log in to receive a JWT token.
JWT Token: The token is signed using a secret key and should be included in the Authorization header for protected routes.

The `/test` endpoint is a protected route that is only accessible when a valid JWT token is provided. 

