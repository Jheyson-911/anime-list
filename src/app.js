import express from 'express';
import authRoutes from './route/user.route.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Success',
  });
});

app.use('/api/v1', authRoutes);

export default app;
