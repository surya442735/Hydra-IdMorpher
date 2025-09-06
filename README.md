# Hydra-IdMorpher

Full-Stack Developer Assignment.
This repository contains the source code for a full-stack web application built as part of the Coderower Software Pvt. Ltd. developer assignment. The application demonstrates the core functionalities of a modern web service, including a RESTful API backend and an interactive frontend to fetch and update data from a MongoDB database.

Features
-
~Fetch Data by ID: Retrieve specific booking records from the database using their unique MongoDB _id.

~Update Data: Modify records by updating a "remark" field for any given booking ID.

~RESTful API: A clean, well-documented backend API built with Node.js and Express.

~Decoupled Architecture: A clear separation between the frontend (React) and backend (Node.js) logic, organized in a monorepo structure.

Tech Stack
-
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB (with Mongoose ODM)

Other Tools: cors, dotenv for environment management.

Getting Started
-
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
-
Node.js and npm installed on your machine.

A MongoDB Atlas account or a local MongoDB instance.

Installation & Setup
-
Clone the repository to your local machine:

git clone [https://github.com/surya442735/Hydra-IdMorpher.git](https://github.com/surya442735/Hydra-IdMorpher.git)

cd Hydra-IdMorpher

Set up the Backend:

Navigate to the backend directory:

cd backend

Install the required npm packages:

npm install

Create a .env file in the backend directory. This file will store your secret database connection string. Copy the contents of .env.example (if provided) or add the following variables:

# .env file
MONGO_URI="YOUR_MONGODB_CONNECTION_STRING"

PORT=8080

Start the backend server:

node server.js

The server should now be running on http://localhost:8080.

Set up the Frontend:

Open a new terminal and navigate to the frontend directory from the project root:

cd frontend

Install the required npm packages:

npm install

Start the React development server:

npm start

The application should automatically open in your browser at http://localhost:3000.

API Endpoints
-
The backend server exposes the following API endpoints:

#GET /api/configurations/:id

Description: Fetches a single booking document by its unique _id.

Method: GET

Parameters: id (string, required) - The MongoDB _id of the booking.

Success Response: 200 OK with the booking object in JSON format.

Error Response: 404 Not Found if the booking does not exist, 500 Server Error for other issues.

#PUT /api/configurations/:id

Description: Updates the remark for a specific booking.

Method: PUT

Parameters: id (string, required) - The MongoDB _id of the booking to update.

Request Body:

{
  "remark": "This is the new updated remark."
}

Success Response: 200 OK with { "message": "Booking remark updated successfully" }.

Error Response: 404 Not Found if the booking does not exist, 400 Bad Request if remark is missing from the body.
