import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'POP THE LOOK API is running! 👗' });
});

// Example: product routes (you will add later)
// app.use('/api/products', productRoutes);

export default app;
