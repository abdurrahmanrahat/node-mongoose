import express from 'express';
import { FoodControllers } from './food.controller';

const router = express.Router();

// post
router.post('/create-food', FoodControllers.createFood);

// get
router.get('/', FoodControllers.getAllFoods);

export const FoodRoutes = router;
