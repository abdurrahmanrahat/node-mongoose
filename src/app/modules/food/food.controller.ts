import { Request, Response } from 'express';
import { FoodServices } from './food.service';

// post food creation
const createFood = async (req: Request, res: Response) => {
  try {
    const food = req.body.food;

    // will call service function to send data
    const result = await FoodServices.createFoodInfoDb(food);

    // send response
    res.status(200).json({
      success: true,
      message: 'Food inserted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get foods method
const getAllFoods = async (req: Request, res: Response) => {
  try {
    const result = await FoodServices.getAllFoodsFromDb();
    res.status(200).json({
      success: true,
      message: 'Foods retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get a food
const getFood = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await FoodServices.getFoodFromDb(id);
    res.status(200).json({
      success: true,
      message: 'A food retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const FoodControllers = {
  createFood,
  getAllFoods,
  getFood,
};
