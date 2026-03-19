# Project Brain Transportation Business Frontend

## Description
The project is a full-stack application that includes two tabs for the transportation business. The frontend uses HTML, CSS, and JavaScript with React or Next.js as the main framework, while the backend runs on NodeJS using FastAPI or Flask to handle requests. A PostgreSQL database is used for storing data.

## Tech Stack
- Frontend: HTML/CSS/JavaScript (React)
- Backend: NodeJS/FastAPI/Flask
- Database: PostgreSQL

## Architecture Overview
The architecture of the application includes a single API endpoint that handles all CRUD operations on the transportation business. The frontend is responsible for rendering and interacting with this data.

![Architecture Diagram](https://github.com/project-brain/transportation_business_frontend/blob/main/architecture.png?raw=true)

## All API Endpoints (from Contract)
- GET: /api/businesses
  - Description: Returns a list of businesses.
- POST: /api/businesses
  - Description: Adds a new business to the system.

## ENV Variables
The following environment variables are used in this project:
- DB_URL: The URL for connecting to the PostgreSQL database.
- JWT_SECRET: A secret key required by the authentication middleware.

## Local Setup Instructions (Docker-compose up)
To set up development environments, you can use Docker Compose. Run `docker-compose up` in your terminal.

## Deploy Instructions
For deployment instructions, please refer to the Vercel static build config file located at `/vercel.json`.

## File Structure
The project structure includes:
- .github/workflows/ci.yml: GitHub Actions CI/CD pipeline.
- README.md: Project documentation.
- .env.example (Environment variable template).
- relative/path/file.ext (What this file does in one sentence).

Please note that the actual deployment URLs for frontend and backend are not provided.