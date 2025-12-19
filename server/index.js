import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import authRoutes from './routes/auth.js';
import apiRoutes from './routes/api.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env from the server directory
dotenv.config({ path: path.join(__dirname, '.env') });

console.log("------------------------------------------------");
const key = process.env.VITE_OPENAI_API_KEY || process.env.OPENROUTER_API_KEY;
console.log("Server Startup: Loaded API Key ->", key ? `Yes (${key.substring(0, 10)}...)` : "NO (Missing)");
console.log("------------------------------------------------");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite default port
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Increase server timeout to 5 minutes to handle long AI operations with retries
server.timeout = 300000;
