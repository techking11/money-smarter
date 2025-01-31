import express from 'express';
import incomeRouter from './routes/income.route';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => {
  res.send('Hello, typescript with express');
});

app.use('/api/v1/incomes', incomeRouter);

export default app;
