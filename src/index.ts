import express, { Application } from 'express';
import cors from 'cors';
import { serverConfig } from './config/server';
import encryptionRoutes from './routes/encryption';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

const app: Application = express();
const PORT = serverConfig.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', encryptionRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});