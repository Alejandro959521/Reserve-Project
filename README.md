# Cumbres Altas — Hotel Reservation System

 Full-stack web application for hotel reservation management. Users can explore rooms, select stay dates, and make bookings, backed by authentication and a secure PostgreSQL backend.

🔗 **Live Demo:** [hotel-dun-rho.vercel.app](https://hotel-dun-rho.vercel.app)

## Features

- User authentication with JWT (Passport + Passport-JWT/Local)
- Reservation date selection with an interactive calendar (react-datepicker)
- Password encryption using bcrypt
- Backend data validation with Joi
- Centralized error handling (including Boom and ORM errors)
- Client-side email sending (EmailJS) — e.g., contact form
- Responsive design with Tailwind CSS

## Tech Stack

**Frontend (`/client`)**
- React 18 + Vite
- React Router DOM
- Tailwind CSS
- Axios
- React Datepicker
- Font Awesome
- EmailJS

**Backend (`/server`)**
- Node.js + Express
- Sequelize (ORM) + Sequelize CLI (migrations)
- PostgreSQL (`pg`, `pg-hstore`)
- Passport (JWT y estrategia local) for authentication
- Bcrypt for password hashing
- Joi for schema validation
- Boom for HTTP error handling
- CORS configured with origin whitelist

## Project Structure

\`\`\`
Reserve-Project/
├── client/     # Frontend in React + Vite
├── server/     # API REST in Express
└── procfile    # Deployment configuration (Heroku-style)
\`\`\`

## Installation

# Clone the repository
git clone https://github.com/Alejandro959521/Reserve-Project.git
cd Reserve-Project

# Backend
cd server
npm install

# Frontend
cd ../client
npm install


## Environment Variables

Create a `.env` file inside `/server`:

| Variable      | Description                              |
|----------------|-------------------------------------------|
| `DATABASE_URL` | PostgreSQL connection string           |
| `PORT`         | Server port (default 3000)   |
| `JWT_SECRET`   | Secret key for signing JWT tokens |

## Usage

# Backend (development mode with nodemon)
cd server
npm run dev

# Frontend
cd client
npm run dev


## Database Migrations

npm run migrations:generate --name nombre_migracion
npm run migrations:run
npm run migrations:revert
\`\`\`

## Deployment

- **Frontend:** Deployed on [Vercel](https://hotel-dun-rho.vercel.app)
- **Backend:** REST API running via `procfile` (`npm run start --prefix server`)

## Autor

**Miguel Alejandro** — [GitHub](https://github.com/Alejandro959521)
