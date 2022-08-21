import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getTodosController } from './infrastructure/controllers/v1/getTodosController';
import { createTodoController } from './infrastructure/controllers/v1/createTodoController';
import { updateTodoController } from './infrastructure/controllers/v1/updateTodoController';
import { deleteTodoController } from './infrastructure/controllers/v1/deleteTodoController';

export const app = express();

require('dotenv').config()

const port = process.env.API_PORT;

const errorHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => void) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

app.get(
  '/todos',
  errorHandler((req: Request, res: Response) =>
    getTodosController.execute(req, res)
  )
);
app.post(
  '/todos',
  errorHandler((req: Request, res: Response) =>
    createTodoController.execute(req, res)
  )
);
app.put(
  '/todos/:id',
  errorHandler((req: Request, res: Response) =>
    updateTodoController.execute(req, res)
  )
);
app.delete(
  '/todos/:id',
  errorHandler((req: Request, res: Response) =>
    deleteTodoController.execute(req, res)
  )
);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.render('Internal error');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
