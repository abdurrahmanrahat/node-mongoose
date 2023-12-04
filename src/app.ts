import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { FoodRoutes } from './app/modules/food/food.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application route here
app.use('/api/foods', FoodRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
