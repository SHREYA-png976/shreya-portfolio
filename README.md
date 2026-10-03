# Shreya M R - Responsive MERN Portfolio

## Run locally

1. Install Node.js (v18+ recommended).
2. Run `npm install`.
3. Copy `.env.example` to `.env` and set `MONGODB_URI` to your MongoDB database.
4. Run `npm run dev`.

The website will be available at `http://localhost:5173` and the API runs on port 5000.

## Deploy publicly

Deploy `server/` through Render as a Node web service. Set `MONGODB_URI` and `CLIENT_ORIGIN` in Render's environment variables. Deploy the repository to Vercel and set `VITE_API_URL` to the Render service URL (for example, `https://your-api.onrender.com`). Update `CLIENT_ORIGIN` with the Vercel site URL after the frontend is live.

## Structure

- `frontend/` - React and Vite responsive portfolio interface
- `server/` - Express API and Mongoose contact-message model
- `.env.example` - environment-variable template
