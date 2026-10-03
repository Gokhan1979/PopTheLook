import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'POP THE LOOK API is running! 👗' });
});

// Auth routes - THIS WAS MISSING!
app.use('/api/auth', authRoutes);

export default app;
