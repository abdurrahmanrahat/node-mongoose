import express from 'express';
import { FoodControllers } from './food.controller';

const router = express.Router();

// post
router.post('/create-food', FoodControllers.createFood);

// get
router.get('/', FoodControllers.getAllFoods);

// get/:id route
router.get('/:id', FoodControllers.getFood);

// put/:id route
router.put('/:id', FoodControllers.updateFood);

// delete/:id route
router.delete('/:id', FoodControllers.deleteFoodById);

export const FoodRoutes = router;
