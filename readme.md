# FullStack Development Demo

## About

This repository contains the code for the backend application for the [Frontend Repository]()

Backend Application is a RESTful API developed using Node.js and Express.js. It uses MongoDB as the database and Mongoose as the ODM (Object Data Modeling).

### Sessions

- **Session - I:**

  - Introduction to FullStack Development
  - Components of FullStack Development
  - Tools and Technologies
  - Setting up the Environment
    - VS Code IDE Installation
    - Node.js Installation
    - Git Installation
    - GitHub Account Creation
    - GitHub Repository Creation
    - Extensions - VSCode
      - Code Runner
  - Setting up the Backend
    - Node.js: To create a server
    - Express.js: To create a REST API
    - Nodemon: Auto Restart Server if any changes in the code
    - Postman: Testing API
    - Database - MongoDB - Atlas Cloud
    - Mongoose - MongoDB Object Data Modeling
    - MongoDB Compass: To visualize the data
  - API Development
    - User Endpoints
      - Create User
      - Get Users
      - Get User by ID
      - Update User
      - Delete User
      - Login User
      - Logout User

- **Session - II:**

  - Problem Satement
  - Completion of the backend w.r.t to the problem statement
  - Setting up the Frontend
    - React.js: To create a UI
    - Vite: To create a React App
    - React Router Dom: To create a Routing
    - Axios: To make HTTP Requests
    - Bootstrap: To style the UI
    - React Icons / Fontawesome / Material Icons: To use Icons
    - React Toastify: To show Toast Messages (Alerts)

- **Session - III:**
  - Completion of the frontend w.r.t to the problem statement
  - Integration of Backend and Frontend
  - Deployment
    - Backend Deployment - Render
    - Frontend Deployment - Netlify
  - Conclusion

## Setup

- Run `npm init` to create a package.json file.
- Run `npm install` to install the dependencies.

## Application

Job Portal Application

### Features

- [x] User Registration
- [x] User Login

- [] Admin Dashboard

  - [] Add a company
  - [] Update a company
  - [] Delete a company
  - [] Get all companies
  - [] Get company by ID

  - [] Add a job
  - [] Update a job
  - [] Delete a job
  - [] Get all jobs
  - [] Get job by ID

- [] User Dashboard

  - [] View all jobs
  - [] View a job by ID
  - [] Apply for a job
  - [] View applied jobs
  - [] View applied job by ID
  - [] Update applied job
  - [] Revoke applied job

- [] User Profile

  - [] Get user profile
  - [] Update user profile
  - [] Delete user profile

- [] Logout

## API Endpoints

### Users

#### Unauthenticated user

- `POST /api/users` - Create a new user
- `POST /api/users/login` - Login user

#### Authenticated user

- `POST /api/users/logout` - Logout user
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update current user
- `DELETE /api/users/me` - Delete current user

#### Authenticated - Admin:

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID
