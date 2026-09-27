# Local MongoDB

This project runs MongoDB 8.0 in Docker and includes a small Node.js driver connection check.

## Start MongoDB

1. Install and start Docker Desktop, then wait for its engine to be ready.
2. Run `npm run db:up`.
3. Run `npm start` to verify the connection.

MongoDB listens on `127.0.0.1:27017`. Its data is stored in the Docker volume `mongodb_data` and remains after the container stops. `npm run db:down` stops the service without deleting its data. `npm run db:logs` follows the server logs.

The connection defaults to `mongodb://127.0.0.1:27017` and the database name `app`. Copy `.env.example` to `.env.local` to configure `MONGODB_URL` and `MONGODB_DATABASE` for this project. `.env.local` keeps this local setup separate from any existing `.env` configuration.

## Without Docker

Install MongoDB Community Server 8.0 for Windows and start the MongoDB Server service. Then run `npm start`.
