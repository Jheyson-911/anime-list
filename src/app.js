import express from 'express';
import authRoutes from './route/user.route.js';
import pendienteRoutes from './route/pendiente.route.js';
import animeRoutes from './route/anime.route.js';
import tipoRoutes from './route/tipo.route.js';
import etiquetaRoutes from './route/etiqueta.route.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Success',
  });
});

app.use('/api/v1', authRoutes);
app.use('/api/v1', pendienteRoutes);
app.use('/api/v1', animeRoutes);
app.use('/api/v1', tipoRoutes);
app.use('/api/v1', etiquetaRoutes);

export default app;
