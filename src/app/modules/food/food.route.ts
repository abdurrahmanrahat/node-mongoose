import express from 'express';
import { FoodControllers } from './food.controller';

const router = express.Router();

// post
router.post('/create-food', FoodControllers.createFood);

export const FoodRoutes = router;
