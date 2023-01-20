import express from 'express';
import authRoutes from './route/user.route.js';
import pendienteRoutes from './route/pendiente.route.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Success',
  });
});

app.use('/api/v1', authRoutes);
app.use('/api/v1', pendienteRoutes);

export default app;
