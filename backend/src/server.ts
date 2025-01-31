import dotenv from 'dotenv';
dotenv.config();

process.on('uncaughtException', (error: Error) => {
  console.error('UNCAUGHT EXCEPTION ! Shutting down ...');
  console.error(error.name, error.message);
  process.exit(1);
});

import app from './app';
import dbConnection from './config/db';

dbConnection();

const host = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.info('......................+..................+.................');
  console.info('| ' + process.env.NODE_ENV + '...');
  console.info(`| Server running on http://${host}:${port}...`);
});

process.on('unhandledRejection', (error: Error) => {
  console.log('UNHANDLED REJECTION ! Shutting down ...');
  console.error(error.name, error.message);
  server.close(() => process.exit(1));
});
