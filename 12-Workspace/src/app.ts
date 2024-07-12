import express, { Request, Response, NextFunction } from 'express';

import todosRoute from './routes/todoRoute';

const app = express();
app.use(express.json());

app.use('/todos', todosRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening at: ${PORT}...`);
});
